
import { ClipboardList, Tooth } from "lucide-react";

const ICON_MAP = {
  clipboard: ClipboardList,
  tooth: Tooth,
} as const;

export default function ProgressCard({
  icon,
  title,
  stepText,
  value,
  barColor = "#F5D36C",
}: {
  icon: keyof typeof ICON_MAP;
  title: string;
  stepText: string; 
  value: number; 
  barColor?: string;
}) {
  const Icon = ICON_MAP[icon];

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#FFF3C9] flex items-center justify-center">
            <Icon className="h-6 w-6 text-[#0E73B8]" />
          </div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
        </div>
        <span className="text-xs font-semibold text-[#0E73B8] bg-[#E7F2FF] px-2 py-1 rounded-full">
          {stepText}
        </span>
      </div>

      <div className="mt-3 h-3 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-3 rounded-full"
          style={{ width: `${value}%`, backgroundColor: barColor }}
        />
      </div>
    </div>
  );
}
