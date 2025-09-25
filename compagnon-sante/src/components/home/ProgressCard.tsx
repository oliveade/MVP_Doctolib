"use client";
import Image from "next/image";

export default function ProgressCard({
    icon,
    title,
    stepText,
    value,
    barColor,
    trackColor,
}: {
    icon: string;
    title: string;
    stepText: string;
    value: number;
    barColor?: string;
    trackColor?: string;
}) {
    return (
        <div className="rounded-[16px] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.08)] p-4">
            <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#FFF3C9] flex items-center justify-center">
                    <Image src={icon} alt="" width={45} height={45} />
                </div>
                <div className="flex-1">
                    <div className="flex text-center justify-between">
                        <h3 className="font-semibold text-[17px] text-slate-900">{title}</h3>
                        <span className="text-[13px] font-semibold px-2 py-1 rounded-full shrink-0" style={{color: trackColor, background: barColor}}>
                            {stepText}
                        </span>
                    </div>

                    <div className="mt-3 h-3 rounded-ful" style={{ background: trackColor }}>
                        <div className="h-3 rounded-full" style={{ width: `${value}%`, backgroundColor: barColor }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
