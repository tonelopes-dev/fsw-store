import { Product } from "@prisma/client";

export interface ProductWithTotalPrice {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  imageUrls: string[];
  categoryId: string;
  discountPercentage: number;
  totalPrice: number;
}

/**
 * Função para calcular o preço total do produto.
 */
export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  const basePrice =
    typeof product.basePrice === "number"
      ? product.basePrice
      : Number(product.basePrice);
  const discountPercentage =
    typeof product.discountPercentage === "number"
      ? product.discountPercentage
      : Number(product.discountPercentage);

  const totalDiscount = basePrice * (discountPercentage / 100);
  const totalPrice = basePrice - totalDiscount;

  return {
    ...product,
    basePrice,
    discountPercentage,
    totalPrice,
  };
};
