"use server";

import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

const createCheckout = async (products: CartProduct[]) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-11-20.acacia",
  });

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "BRL",
      product_data: {
        name: product.name,
        images: product.imageUrls,
        description: product.description,
        metadata: { id: product.id },
      },
      unit_amount: Number(product.totalPrice) * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: { allowed_countries: ["BR"] },
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: process.env.VERCEL_URL,
    cancel_url: process.env.VERCEL_URL,
  });

  return session.id;
};

export default createCheckout;
