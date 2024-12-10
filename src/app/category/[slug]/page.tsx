import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

type CategoryProductsProps = {
  params: Promise<{ slug: string }>;
};

const CategoryProducts = async ({ params }: CategoryProductsProps) => {
  const slug = (await params).slug;
  let category;
  console.log(slug);
  try {
    category = await prismaClient.category.findFirst({
      where: {
        slug,
      },
      include: {
        products: true,
      },
    });

    if (!category) {
      console.warn(`Category with slug "${slug}" not found.`);
      return (
        <div className="text-center text-red-500">
          Categoria não encontrada.
        </div>
      );
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="mx-auto flex flex-col gap-8 p-5 lg:container lg:gap-10 lg:py-10">
      <Badge variant="heading">
        {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
        {category!.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {category!.products.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product).totalPrice,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
