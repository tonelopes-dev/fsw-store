"use client";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboardIcon,
  ListOrderedIcon,
  PackageIcon,
  PackageSearchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="flex min-w-[300px] flex-col items-center gap-8 border-r border-solid border-accent bg-background p-8">
      <h1 className="text-lg font-semibold">
        <span className="font-bold text-primary">FSW</span> Store
      </h1>

      <div className="flex w-full flex-col gap-3">
        <Button
          variant="outline"
          className={
            `flex w-full justify-start gap-2 hover:bg-primary hover:text-white` +
            (path === "/dashboard" ? " bg-primary text-white" : "")
          }
        >
          <LayoutDashboardIcon size={16} />
          Dashboard
        </Button>

        <Link href="/dashboard/products">
          <Button
            variant="outline"
            className={
              `flex w-full justify-start gap-2 hover:bg-primary hover:text-white` +
              (path === "/dashboard/products" ? " bg-primary text-white" : "")
            }
          >
            <PackageIcon size={16} />
            Produtos
          </Button>
        </Link>

        <Button
          variant="outline"
          className={
            `flex w-full justify-start gap-2 hover:bg-primary hover:text-white` +
            (path === "/dashboard/categories" ? " bg-primary text-white" : "")
          }
        >
          <ListOrderedIcon size={16} />
          Categorias
        </Button>

        <Button
          variant="outline"
          className={
            `flex w-full justify-start gap-2 hover:bg-primary hover:text-white` +
            (path === "/dashboard/orders" ? " bg-primary text-white" : "")
          }
        >
          <PackageSearchIcon size={16} />
          Pedidos
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;