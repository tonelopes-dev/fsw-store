import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const slug = (await params).slug;
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: { not: slug },
            },
          },
        },
      },
    },
  });
  if (!product) {
    return <p>Product not found.</p>;
  }

  // Converting the product data to avoid Decimal objects being passed to client components

  return (
    <div className="flex flex-col gap-8 pb-8 lg:container lg:mx-auto lg:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="lg:w-3/5">
          <ProductImages imageUrls={product.imageUrls} name={product.name} />
        </div>

        <div className="lg:w-2/5">
          <ProductInfo
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }}
          />
        </div>
      </div>

      <div>
        <SectionTitle>Produtos recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
