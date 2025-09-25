import { Search } from "lucide-react";

export default function HomeHero({ user }: { user: string }) {
  return (
    <div className="relative bg-[#007CD0] text-white h-[300px] px-4 overflow-hidden flex items-center justify-center rounded-b-3xl">
      <div className="absolute -right-20 top-16 w-[260px] h-[260px] bg-[#00BFFF] rounded-full opacity-40 z-0" />
      <div className="absolute right-6 top-24 w-12 h-12 bg-[#FFCD4D] rounded-2xl rotate-12 z-0" />
      <div className="absolute right-0 bottom-6 w-40 h-40 bg-[#00264C] rounded-tl-[120px] rounded-bl-[40px] z-0" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-[32px] leading-tight font-extrabold text-center max-w-[320px]">
          <span className="block">Bonjour {user},</span>
          <span className="block text-[22px] font-semibold text-[#A0D3EA] ">
            chaque petit pas compte
          </span>
          <span className="block text-[22px] font-semibold text-[#A0D3EA]">
            pour ta santé
          </span>
        </h1>

        <a
          href="/search"
          className="flex w-[247px] h-14 items-center justify-center gap-3 rounded-2xl bg-white text-[#0E73B8] shadow-lg"
        >
          <Search className="h-5 w-5" />
          <span className="font-semibold tracking-wide">RECHERCHER</span>
        </a>
      </div>
    </div>
  );
}

