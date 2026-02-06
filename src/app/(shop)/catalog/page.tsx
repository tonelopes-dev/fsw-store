import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  // Your component implementation here
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 rounded-full border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((c) => (
          <CategoryItem key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
