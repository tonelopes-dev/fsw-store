import { prismaClient } from "@/lib/prisma";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

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

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>
      <div>
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>
      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
