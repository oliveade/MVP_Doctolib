"use client";
import { useState } from "react";

export default function SearchBox() {
  const [q, setQ] = useState("");
  return (
    <div className="rounded-[14px] border-2 border-[#D7E8F6] bg-white h-[54px] px-3 flex items-center gap-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#0E73B8" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="#0E73B8" strokeWidth="2" strokeLinecap="round"/></svg>
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Chercher soignants, établissement..."
        className="flex-1 outline-none bg-transparent placeholder-slate-400 text-[15px]"
      />
    </div>
  );
}
