"use client";

import { Loader2, ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import createCheckout from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { SheetTitle } from "./sheet";
import { signIn, useSession } from "next-auth/react";
import { createOrder } from "@/actions/order";

import { useState } from "react";
const Cart = () => {
  const { data } = useSession();
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false); // Estado para o loading

  const handleFinishPurchase = async () => {
    if (!data?.user) {
      alert("Você precisa estar logado para finalizar a compra.");
      signIn(); // Redireciona para a página de login
      return; // Interrompe a execução da função se o usuário não estiver logado
    }

    // Define o estado de carregamento como verdadeiro
    setIsLoading(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const order = await createOrder(products, (data?.user as any).id);

      const sessionId = await createCheckout(products, order.id);

      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!,
      );

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error("Erro ao finalizar a compra:", error);
      // Aqui você pode exibir um alerta ou tratamento de erro adequado
    } finally {
      // Define o estado de carregamento como falso após a conclusão
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col gap-8 text-sm">
      {/* Header do Carrinho */}
      <Badge variant="heading">
        <ShoppingCartIcon size={18} />
        <SheetTitle
          className="w-fit rounded-full px-2 py-[0.375rem] text-base uppercase"
          aria-describedby="cart"
        >
          Carrinho
        </SheetTitle>
      </Badge>

      {/* Produtos no Carrinho */}
      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={{
                    ...product,
                    totalPrice: computeProductTotalPrice(product),
                  }}
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Seu carrinho está vazio.
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Resumo do Carrinho */}
      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs lg:text-sm">
            <p>Descontos</p>
            <p>- R$ {totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm font-bold lg:text-base">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          {/* Botão Finalizar Compra */}
          {isLoading ? (
            <Button disabled>
              Carregando...
              <Loader2 className="animate-spin" />
            </Button>
          ) : data?.user ? (
            <Button
              className="mt-7 font-bold uppercase"
              onClick={handleFinishPurchase}
            >
              Finalizar compra
            </Button>
          ) : (
            <Button
              className="mt-7 font-bold uppercase"
              onClick={() => signIn()}
            >
              Finalizar compra
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
