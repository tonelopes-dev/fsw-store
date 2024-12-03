import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { slug } = await params;
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
  const productData = {
    ...product,
    basePrice: product.basePrice, // Convert Decimal to number
    discountPercentage: Number(product.discountPercentage), // Convert Decimal to number
    // Ensuring that category.products is also converted if needed
    category: {
      ...product.category,
      products: product.category.products.map((prod) => ({
        ...prod,
        basePrice: prod.basePrice.toNumber(),
        discountPercentage: Number(prod.discountPercentage),
      })),
    },
  };

  return (
    <div className="pb8 flex flex-col gap-8">
      <ProductImages
        imageUrls={productData.imageUrls}
        name={productData.name}
      />

      <ProductInfo product={computeProductTotalPrice(productData)} />
      <div>
        <SectionTitle>Produtos recomendados</SectionTitle>
        <ProductList products={productData.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
