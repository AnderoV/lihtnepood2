import TicksIcon from "../public/TicksIcon";

export default function ToSPage() {
  return (
    <section className=" mt-16 h-screen  py-11 px-10">
      <div className="flex flex-col gap-14 ">
        <div className="flex gap-6 items-center">
          <h2 className="font-extrabold text-5xl">Terms and Conditions</h2>
          <TicksIcon className="w-12 h-12 fill-sky-400" />
        </div>
        <p className="bg-sky-700/20 p-12 rounded-xl">
        Veebipoe Skenifor omanik on OÜ Skenifor, asukohaga Tallinn.

Müügilepingu kehtivus, kauba- ja hinnainfo

Müügitingimused kehtivad Veebipoest kaupade ostmisel.

Veebipoes müüdavate toodete hinnad on märgitud toodete juurde. Hinnale lisandub tasu kauba kättetoimetamise eest. Kõik veebipoes müüdavate kaupade hinnad on dollarites.

Kauba kättetoimetamise tasu sõltub ostja asukohast ning kättetoimetamise viisist. Kättetoimetamise tasu kuvatakse ostjale tellimuse vormistamisel.

Teave kauba kohta on esitatud Veebipoes vahetult kauba juures.

Tellimuse vormistamine

Siin peab kaupmees lähtuma just oma veebipoe ostu sooritamise lahendusest.

Kauba tellimiseks tuleb lisada soovitud tooted ostukorvi. Tellimuse vormistamiseks tuleb täita nõutud andmeväljad ning valida sobiv toodete kohaletoimetamise viis. Seejärel kuvatakse ekraanile tasu suurus, mille saab tasuda turvaliselt läbi varieeruvate makseviiside.
        </p>
      </div>
    </section>
  );
}
