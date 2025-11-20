import { Button } from "../ui/button";
import { type FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from "lucide-react";

interface NavigationProps {
  onScrollToSection?: (key: string) => void;
  isHero?: boolean;
}

const Navigation: FC<NavigationProps> = ({ onScrollToSection, isHero = false }) => {
  const NavList = [
    { label: "Home", key: "hero" },
    { label: "About", key: "about" },
    { label: "Features", key: "features" },
    { label: "Products", key: "products" },
    { label: "Brands", key: "brands" },
  ];
  const navClass = isHero
    ? "w-full bg-transparent py-3 fixed top-0 left-0 z-50"
    : "w-full bg-background/5 py-3 fixed top-0 left-0 z-50 backdrop-blur-sm";
  const textClass = isHero ? "text-white" : "text-foreground";

  return (
    <nav className={`${navClass}`}>
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 md:px-16">
        <h1 className={`font-secondary tracking-widest text-xl cursor-pointer ${textClass}`} onClick={() => onScrollToSection?.("hero")}>TentMart</h1>
        <div className="md:flex items-center gap-4 hidden">
          {NavList.map((item, index) => (
            <Button
              key={index}
              variant="link"
              size="lg"
              className={`font-secondary tracking-wide text-xl no-underline hover:no-underline ${textClass} cursor-pointer`}
              onClick={() => onScrollToSection?.(item.key)}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <AlignRight className={`size-7 ${textClass} cursor-pointer`} />
            </SheetTrigger>
            <SheetContent side="right" className="w-3/5 bg-background/50 backdrop-blur-md">
              <SheetHeader>
                <SheetTitle className="text-2xl font-secondary">Menu</SheetTitle>
                <SheetDescription className="mt-2 mb-6">
                  
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col items-end gap-6">
                {NavList.map((item, index) => (
                  <Button
                    key={index}
                    variant="link"
                    size="lg"
                    className={`font-secondary tracking-wide text-xl no-underline hover:no-underline ${textClass} cursor-pointer`}
                    onClick={() => onScrollToSection?.(item.key)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
