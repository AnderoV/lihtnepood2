import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  return (
    <div
      className={`absolute w-screen flex justify-between top-0 z-10 h-screen bottom-0 ${
        isOpen ? "left-0" : "-left-full"
      } transition-all duration-500 ease-out`}
    >
      <div className="flex px-8 py-8 min-w-[25rem] backdrop-blur bg-sky-700/75 justify-center items-center">
        <ul className="flex flex-col gap-6 items-start text-neutral-900 font-semibold [&>li]:px-2 [&>li]:bg-slate-100 [&>li]:rounded-md h-min">
          <li className="hover:bg-slate-50">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`${
                router.pathname === "/" ? "text-sky-700" : ""
              } text-5xl`}
            >
              Kodu
            </Link>
          </li>
          <li className="hover:bg-slate-50">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`${
                router.pathname === "/contact" ? "text-sky-700" : ""
              } text-5xl`}
            >
              Kontakt
            </Link>
          </li>
          <li className="hover:bg-slate-50">
            <Link
              href="/tos"
              onClick={() => setIsOpen(false)}
              className={`${
                router.pathname === "/tos" ? "text-sky-700" : ""
              } text-5xl`}
            >
              Lepped ja tingimused
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="w-full h-full"
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
};