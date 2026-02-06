"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <div>
      <Card className="flex items-center justify-between p-[1.875rem]">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="lg:hidden">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"} aria-describedby="menu">
              <SheetHeader className="text-left text-lg font-semibold">
                <SheetTitle aria-describedby="menu">Menu</SheetTitle>
              </SheetHeader>

              {status === "authenticated" && data?.user && (
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 py-3">
                    <Avatar>
                      {data.user.image && <AvatarImage src={data.user.image!} />}
                      <AvatarFallback>
                        {data?.user?.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="font-semibold">{data?.user?.name}</p>
                      <SheetDescription className="text-xs opacity-75">
                        Boas compras!
                      </SheetDescription>
                    </div>
                  </div>
                  <Separator />
                </div>
              )}

              <div className="mt-4 flex flex-col space-y-3">
                {status === "unauthenticated" && (
                  <Button
                    onClick={handleLoginClick}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <LogInIcon size={16} />
                    Fazer login
                  </Button>
                )}

                {status === "authenticated" && (
                  <Button
                    onClick={handleLogoutClick}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <LogOutIcon size={16} />
                    Fazer Logout
                  </Button>
                )}
                <SheetClose asChild>
                  <Link href={"/"}>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <HomeIcon size={16} />
                      Início
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href={"/orders"}>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <PackageSearchIcon size={16} />
                      Meus Pedidos
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"/deals"}>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <PercentIcon size={16} />
                      Ofertas
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/catalog">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <ListOrderedIcon size={16} />
                      Catálago
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          <Link href={"/"}>
            <h1 className="text-lg font-semibold">
              <span className="font-bold text-primary">FSW</span> Store
            </h1>
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <Link
            href="/"
            className="text-sm font-semibold transition-colors hover:text-primary"
          >
            Início
          </Link>
          <Link
            href="/deals"
            className="text-sm font-semibold transition-colors hover:text-primary"
          >
            Ofertas
          </Link>
          <Link
            href="/catalog"
            className="text-sm font-semibold transition-colors hover:text-primary"
          >
            Catálogo
          </Link>
          <Link
            href="/orders"
            className="text-sm font-semibold transition-colors hover:text-primary"
          >
            Meus Pedidos
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {status === "unauthenticated" && (
            <Button
              onClick={handleLoginClick}
              variant="ghost"
              className="hidden lg:flex"
            >
              Entrar
            </Button>
          )}

          {status === "authenticated" && (
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Button onClick={handleLogoutClick} variant="ghost">
                Sair
              </Button>
              <Avatar className="h-8 w-8">
                {data?.user?.image && <AvatarImage src={data.user.image!} />}
                <AvatarFallback>
                  {data?.user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="relative">
                <ShoppingCartIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side={"right"} aria-describedby="menu">
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </Card>
    </div>
  );
};

export default Header;
