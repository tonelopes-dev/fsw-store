import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: { gt: 0 },
    },
    orderBy: {
      discountPercentage: "desc",
    },
    take: 8,
  });
  return (
    <div>
      <Image
        src="/banner-home-01.png"
        sizes="100wv"
        width={0}
        height={0}
        alt="Até 55% de desconto esse mês!"
        className="h-auto w-full px-5"
        priority={true} // {false} | {true}
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>
      <Image
        src="/banner-home-02.png"
        sizes="100wv"
        width={0}
        height={0}
        alt="Até 55% de desconto em mouses"
        className="h-auto w-full px-5"
        priority={true} // {false} | {true}
      />
    </div>
  );
}
