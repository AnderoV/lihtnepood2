import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "./Nav";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className=" flex h-16 bg-sky-800/20 backdrop-blur w-full items-center justify-center gap-2 border border-slate-300/20">
      <ul className="flex gap-6 items-center  text-neutral-900 font-semibold [&>li]:px-2 [&>li]:bg-slate-100 [&>li]:rounded-md h-min">
        <li className="hover:bg-slate-50">
          <Link
            href="/"
            className={` ${router.pathname === "/" ? "text-sky-700" : ""}`}
          >
            Home
          </Link>
        </li>
        <li className="hover:bg-slate-50">
          <Link
            href="/contact"
            className={`${
              router.pathname === "/contact" ? "text-sky-700" : ""
            }`}
          >
            Contact
          </Link>
        </li>
        <li className="hover:bg-slate-50">
          <Link
            href="/tos"
            className={`${router.pathname === "/tos" ? "text-sky-700" : ""}`}
          >
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </footer>
  );
};
