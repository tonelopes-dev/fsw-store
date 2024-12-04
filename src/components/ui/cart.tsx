import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { SheetHeader, SheetTitle } from "./sheet";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import { computeProductTotalPrice } from "@/helpers/product";
import CartItem from "./cart-item";
import { Separator } from "./separator";

const Cart = () => {
  const { products, total, subtotal, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        variant="outline"
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
      >
        <SheetHeader className="text-left text-lg font-semibold">
          <ShoppingCartIcon />
        </SheetHeader>
        <SheetTitle>Carrinho</SheetTitle>
      </Badge>
      {/* Renderizar os produtos */}
      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-lg font-semibold">
              Seu carrinho está vazio.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p className="font-semibold">Subtotal:</p>
          <p className="font-semibold">R$ {subtotal.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p className="font-semibold">Desconto:</p>
          <p className="font-semibold">R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p className="font-semibold">Frete:</p>
          <p className="font-semibold">GRÁTIS</p>
        </div>
        <Separator />

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="font-semibold">Total:</p>
          <p className="font-semibold">R$ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
