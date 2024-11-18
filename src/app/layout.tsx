import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "./providers/auth";

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
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
