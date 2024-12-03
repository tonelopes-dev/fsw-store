"use client";
import { useContext, useState } from "react";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { CartContext } from "@/providers/cart";

interface ProductInforProps {
  product: ProductWithTotalPrice;
}
const ProductInfo = ({ product }: ProductInforProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    addProductToCart({ ...product, quantity });
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {Number(product.totalPrice.toFixed(2))}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {product.basePrice.toFixed(2)}
        </p>
      )}
      <div className="mt-4 flex items-center gap-2">
        <Button
          size={"icon"}
          onClick={() => handleDecrement()}
          variant="outline"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </Button>

        <span className="">{quantity}</span>
        <Button
          size={"icon"}
          onClick={() => handleIncrement()}
          variant="outline"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Descrição</h3>
        <p className="text-sm opacity-60">{product.description}</p>
      </div>

      <Button
        className="mb-3 mt-8 font-bold uppercase"
        onClick={handleAddToCart}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-2 flex items-center justify-between rounded-lg bg-accent px-5 py-3">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold"> todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
