import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartIcon from "../public/CartIcon";
import { BurgerButton } from "./Buttons";
import { Nav } from "./Nav";

export const Header = () => {
  const { cartQuantity } = useCart();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="drop-shadow-header backdrop-blur bg-sky-600/20 fixed top-0 left-0 right-0 z-20 flex items-center gap-10 border-b-[1px] justify-between border-slate-300/20 py-3 px-10 font-medium text-slate-50  ">
      <div className="flex gap-12 items-center">
        <BurgerButton
          isOpen={isNavOpen}
          onClick={() => setIsNavOpen((prevState) => !prevState)}
        />
        <Nav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        <Link href="/">
          <h3 className="text-2xl font-bold text-sky-400 transition-all duration-300 hover:text-sky-500">
            Skenifor
          </h3>
        </Link>
      </div>

      <Link href="/cart" className="relative">
        <CartIcon className="w-7 h-7 fill-sky-400 hover:fill-sky-300 transition-all duration-300" />
        <span className="items absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600">
          <span className="text-sm font-bold transition-all duration-300">
            {cartQuantity}
          </span>
        </span>
      </Link>
    </header>
  );
};
