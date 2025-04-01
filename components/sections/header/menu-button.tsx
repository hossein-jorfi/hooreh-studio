import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menuItems } from "./contants";

const MenuButton = () => {
  return (
    <div className="sm:hidden">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button>دکمه</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuLabel className="text-right">هوره</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuItems.map((item, index) => (
            <DropdownMenuItem key={index} className="justify-end">{item.name}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuButton;
