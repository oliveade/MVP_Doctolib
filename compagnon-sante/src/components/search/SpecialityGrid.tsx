import Image from "next/image";

export type Specialty = {
  key: string;
  title: string;
  subtitle: string;
  icon: string;
};

export default function SpecialtyGrid({
  items, onSelect,
}: {
  items: Specialty[];
  onSelect: (s: Specialty) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((s) => (
        <button
          key={s.key}
          onClick={() => onSelect(s)}
          className="text-left rounded-[16px] bg-white p-5 shadow-[0_8px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_18px_rgba(0,0,0,0.09)] transition"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-[#EAF5FE] flex items-center justify-center">
              <Image src={s.icon} alt="" width={28} height={28} />
            </div>
            <div className="text-center">
              <div className="font-semibold text-[18px] text-slate-900">{s.title}</div>
              <div className="mt-1 text-[14px] text-slate-600">{s.subtitle}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
