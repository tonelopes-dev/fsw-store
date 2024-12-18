import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

export const POST = async (request: Request) => {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Invalid request", { status: 400 });
  }
  const text = await request.text();

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET_KEY!,
  );

  if (event.type === "checkout.session.completed") {
    // console.log("Checkout session completed:", event.data.object);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const session = event.data.object as any;

    const order = await prismaClient.order.update({
      where: {
        id: session.metadata.orderId,
      },
      data: {
        status: "PAYMENT_CONFIRMED",
      },
    });
    console.log(order);
  }

  if (event.type === "checkout.session.async_payment_failed") {
    // console.log("Checkout session failed:", event.data.object);
  }

  // atualizar PEDIDO

  //ENVIAR EMAIL

  return NextResponse.json({ received: true });
};
