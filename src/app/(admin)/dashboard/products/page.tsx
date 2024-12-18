import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prismaClient } from "@/lib/prisma";
import { Package, PlusIcon } from "lucide-react";

const ProductsPage = async () => {
  const products = await prismaClient.product.findMany({});
  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <Badge variant="heading">
        <Package size={18} className="mr-2" />
        Produtos
      </Badge>
      <div className="flex justify-between">
        <p className="text-lg font-bold">
          Produtos encontrados: {products.length}
        </p>
        <Button>
          <PlusIcon size={16} /> Adicionar Produto
        </Button>
      </div>
    </div>
  );
};

export default ProductsPage;
