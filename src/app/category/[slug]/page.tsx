import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

interface CategoryProductsProps {
  params: { slug: string }; // `params` contém `slug`
}

const CategoryProducts = async ({ params }: CategoryProductsProps) => {
  const { slug } = params; // Acessa `params.slug` corretamente

  const category = await prismaClient.category.findFirst({
    where: {
      slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return <p>Categoria não encontrada.</p>; // Retorna uma mensagem apropriada
  }

  return (
    <div className="mx-auto flex flex-col gap-8 p-5 lg:container lg:gap-10 lg:py-10">
      <Badge variant="heading" className="w-fit">
        {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
