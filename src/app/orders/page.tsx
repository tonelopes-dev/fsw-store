import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import OrderItem from "./components/order-item";

async function OrderPage() {
  const user = getServerSession(authOptions);
  if (!user) {
    return <div>Você não está logado</div>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 rounded-full border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Meus pedidos
      </Badge>
      <div className="flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
