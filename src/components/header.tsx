import { Logo } from "@/components/logo";
import { ModeToggle } from "./theme-toggle";
import { CartSideBar } from "./cart/sidebar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-3">
        <Logo />
        <ModeToggle />
      </div>
      <div className="flex items-center gap-3">
        <CartSideBar />
      </div>
    </header>
  );
};
