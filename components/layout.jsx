import { Footer } from "./Footer";
import { Header } from "./Header";
import img from "../public/storebg.jpg";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-[url(../public/storebg.jpg)]  bg-center bg-cover	 ">
        <Header />
        <main className="flex w-full flex-col gap-28  text-slate-50 backdrop-blur backdrop-brightness-90">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
