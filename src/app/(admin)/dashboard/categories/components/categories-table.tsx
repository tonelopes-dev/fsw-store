import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Prisma } from "@prisma/client";

interface CategoriesTableProps {
  categories: Prisma.CategoryGetPayload<{
    include: {
      products: {
        select: {
          id: true;
        };
      };
    };
  }>[];
}
const CategoriesTable = ({ categories }: CategoriesTableProps) => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Porcentagem das vendas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((categories) => (
            <TableRow key={categories.id}>
              <TableCell>{categories.name}</TableCell>
              <TableCell>{categories.products.length}</TableCell>
              <TableCell>0%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesTable;
