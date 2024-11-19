import { prismaClient } from "@/lib/prisma";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  });
  if (!product) {
    return <p>Product not found.</p>;
  }
  return <h1>{product?.name}</h1>;
};

export default ProductDetailsPage;
