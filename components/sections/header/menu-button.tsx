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
import { Menu } from "lucide-react";
import Link from "next/link";

const MenuButton = () => {
  return (
    <div className="sm:hidden">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuLabel className="text-right font-bold">
            هوره
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="justify-end font-bold"
              asChild
            >
              <Link href={item.id}>{item.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuButton;
