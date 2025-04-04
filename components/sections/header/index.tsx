import { Button } from "@/components/ui/button";
import MenuButton from "./menu-button";
import { menuItems } from "./contants";
import MainLogo from "@/components/shared/main-logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-secondary/20 backdrop-blur-3xl fixed top-0 w-full z-10 border-b-4">
      <div className="w-full custom-container py-3 flex justify-between items-center">
        <div>
          <div className="hidden sm:block">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                asChild
              >
                <Link href={item.id}>{item.name}</Link>
              </Button>
            ))}
          </div>
          <MenuButton />
        </div>
        <MainLogo />
      </div>
    </div>
  );
};

export default Header;
