import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-2">
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
