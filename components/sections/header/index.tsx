import { Button } from "@/components/ui/button";
import MenuButton from "./menu-button";
import { menuItems } from "./contants";

const Header = () => {
  return (
    <div className="py-3">
      <div className="hidden sm:block">
        {menuItems.map((item, index) => (
          <Button key={index} variant="ghost">
            {item.name}
          </Button>
        ))}
      </div>
      <MenuButton />
    </div>
  );
};

export default Header;
