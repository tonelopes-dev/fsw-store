import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} className="ml-2" />,
    monitors: <MonitorIcon size={16} className="ml-2" />,
    headphones: <HeadphonesIcon size={16} className="ml-2" />,
    mousepads: <SquareIcon size={16} className="ml-2" />,
    speakers: <SpeakerIcon size={16} className="ml-2" />,
    mouses: <MouseIcon size={16} className="ml-2" />,
    // Add more category icons as needed
  };
  return (
    <Badge
      variant="outline"
      className="justify-left mt-auto flex items-center gap-2 rounded-lg py-2"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};
