"use client";
import {
  Stethoscope, Pill, ShieldAlert, Users, Hospital, Syringe, LineChart, HandHeart
} from "lucide-react";

const ICONS: Record<string, any> = {
  stethoscope: Stethoscope, capsule: Pill, allergy: ShieldAlert,
  family: Users, hospital: Hospital, syringe: Syringe,
  chart: LineChart, "heart-hands": HandHeart,
};

export default function InfoTiles({
  items, onClick
}:{ items:{key:string; label:string; icon:keyof typeof ICONS; badge?:number}[];
   onClick:(key:string)=>void; }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map(({ key, label, icon, badge }) => {
        const Icon = ICONS[icon];
        return (
          <button key={key}
            onClick={()=>onClick(key)}
            className="relative rounded-2xl bg-white shadow-md p-6 text-left hover:shadow-lg transition"
          >
            {!!badge && (
              <span className="absolute -top-2 -right-2 h-6 min-w-6 px-1 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                {badge}
              </span>
            )}
            <div className="h-10 w-10 rounded-xl bg-[#E6F4FF] flex items-center justify-center mb-3">
              <Icon className="h-5 w-5 text-[#0E73B8]" />
            </div>
            <div className="font-semibold leading-snug">{label}</div>
          </button>
        );
      })}
    </div>
  );
}
