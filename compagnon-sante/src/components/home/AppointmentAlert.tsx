import Image from "next/image";

export default function AppointmentAlert({ dateLabel }: { dateLabel: string }) {
  return (
    <div className="rounded-[16px] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.08)] p-4">
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 rounded-2xl bg-[#FFF3C9] flex items-center justify-center">
          <Image src="/avatar/doctor.png" alt="" width={45} height={45}/>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[16px]">Votre rendez-vous est dans 2 jours !</div>
          <div className="text-[14px] text-slate-600 mt-2">{dateLabel}</div>
        </div>
      </div>
    </div>
  );
}
