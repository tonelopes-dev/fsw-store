import { Badge } from "@/components/ui/badge";
import { LayoutDashboardIcon } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <Badge variant="heading">
        <LayoutDashboardIcon size={18} />
        Dashboard
      </Badge>
    </div>
  );
};

export default DashboardPage;
