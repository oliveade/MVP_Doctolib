import Link from "next/link";

export default function SearchHeader() {
  return (
    <header className="px-4 pt-4 pb-2 flex items-center justify-center relative">
      <Link href="/" className="absolute left-4 top-4 h-10 w-10 rounded-full bg-white/70 backdrop-blur flex items-center justify-center shadow">
        <span className="sr-only">Retour</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#0E73B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
      <h2 className="text-[20px] font-bold text-slate-900">Rechercher</h2>
    </header>
  );
}
