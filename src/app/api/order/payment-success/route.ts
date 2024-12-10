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

  /* if (event.type === "checkout.session.completed") {
      console.log("Checkout session completed:", event.data.object);

    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      },
    );
    const orderProducts = sessionWithLineItems.line_items;
    console.log(orderProducts);
  }*/

  if (event.type === "checkout.session.async_payment_failed") {
    // console.log("Checkout session failed:", event.data.object);
  }
  // CRIAR PEDIDO

  //ENVIAR EMAIL

  return NextResponse.json({ received: true });
};
/*  model Order {
    id            String         @id @default(uuid())
    userId        String
    user          User           @relation(fields: [userId], references: [id])
    orderProducts OrderProduct[]
    createdAt     DateTime       @default(now())
    updatedAt     DateTime       @default(now()) @updatedAt
    status        OrderStatus    @default(WAITING_FOR_PAYMENT)


    await prismaClient.order.create({
      data: {
        status: "PAYMENT_CONFIRMED",
        orderProducts: {},
      },
    });
  } */
