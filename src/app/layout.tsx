import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "../providers/auth";
import Footer from "@/components/ui/footer";
import CartProvider from "@/providers/cart";

export const metadata: Metadata = {
  title: "FWS Store",
  description: "Sua loja online de technologias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
