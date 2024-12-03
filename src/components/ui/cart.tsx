import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { SheetHeader, SheetTitle } from "./sheet";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Cart = () => {
  // Lógica para obter os produtos do carrinho
  const { products } = useContext(CartContext);
  return (
    <div>
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
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Cart;
