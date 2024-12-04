import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { SheetHeader, SheetTitle } from "./sheet";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import { computeProductTotalPrice } from "@/helpers/product";
import CartItem from "./cart-item";

const Cart = () => {
  // Lógica para obter os produtos do carrinho
  const { products } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        variant="outline"
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
      >
        <SheetHeader className="text-left text-lg font-semibold">
          <ShoppingCartIcon />
        </SheetHeader>
        <SheetTitle>Meus produtos</SheetTitle>
      </Badge>
      {/* Renderizar os produtos */}

      {products.map((product) => (
        <CartItem
          key={product.id}
          product={computeProductTotalPrice(product as any) as any}
        />
      ))}
    </div>
  );
};

export default Cart;
