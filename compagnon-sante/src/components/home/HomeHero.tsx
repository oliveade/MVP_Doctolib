import { Search } from "lucide-react";

export default function HomeHero({ user }: { user: string }) {
  return (
    <div className="relative bg-[#0E73B8] text-white pb-20 pt-8 px-4 overflow-hidden">
      <div className="text-3xl font-semibold italic">
        Docto<span className="not-italic font-normal">lib</span>
      </div>

      <h1 className="mt-6 text-[34px] leading-[1.05] font-extrabold">
        Bonjour Clara,<br />
        <span className="font-semibold">chaque petit pas compte</span>
        <br />
        <span className="font-semibold">pour ta santé</span>
      </h1>

      <div className="absolute -right-20 top-16 w-[260px] h-[260px] bg-[#09A9E6] rounded-full opacity-40" />
      <div className="absolute right-6 top-24 w-12 h-12 bg-[#FFC04D] rounded-2xl rotate-12" />
      <div className="absolute right-0 bottom-6 w-40 h-40 bg-[#042A45] rounded-tl-[120px] rounded-bl-[40px]" />

      <div className="mt-6">
        <a
          href="/recherche"
          className="mx-auto block max-w-[520px] rounded-full bg-white text-[#0E73B8] h-14 px-6  items-center gap-3 shadow-lg"
        >
          <Search className="h-5 w-5" />
          <span className="font-semibold tracking-wide">RECHERCHER</span>
        </a>
      </div>
    </div>
  );
}
