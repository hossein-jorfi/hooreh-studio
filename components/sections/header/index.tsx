import { Button } from "@/components/ui/button";
import MenuButton from "./menu-button";
import { menuItems } from "./contants";
import MainLogo from "@/components/shared/main-logo";

const Header = () => {
  return (
    <div className="py-3 custom-container flex justify-between items-center bg-border">
      <div>
        <div className="hidden sm:block">
          {menuItems.map((item, index) => (
            <Button key={index} variant="ghost">
              {item.name}
            </Button>
          ))}
        </div>
        <MenuButton />
      </div>
      <MainLogo />
    </div>
  );
};

export default Header;
