import { Search } from "lucide-react";

export default function HomeHero({ user }: { user: string }) {
  return (
    <div className="relative bg-[#007CD0] text-white pb-20 pt-8 px-4 overflow-hidden">
      <h1 className="mt-6 text-[32px] leading-[1.05] font-extrabold">
        Bonjour {user},<br />
        <span className="text-[22px]">chaque petit pas compte</span>
        <br />
        <span className="text-[22px]">pour ta santé</span>
      </h1>

      <div className="mt-6">
        <div className="absolute -right-20 top-16 w-[260px] h-[260px] bg-[#00BFFF] rounded-full opacity-40" />
        <div className="absolute right-6 top-24 w-12 h-12 bg-[#FFCD4D] rounded-2xl rotate-12" />
        <div className="absolute right-0 bottom-6 w-40 h-40 bg-[#00264C] rounded-tl-[120px] rounded-bl-[40px]" />
      </div>

      <div className="mt-6">
        <a
          href="/recherche"
          className="mx-auto flex max-w-[520px] rounded-full bg-white text-[#0E73B8] h-14 px-6  items-center gap-3 shadow-lg"
        >
          <Search className="h-5 w-5" />
          <span className="font-semibold tracking-wide">RECHERCHER</span>
        </a>
      </div>
    </div>
  );
}
