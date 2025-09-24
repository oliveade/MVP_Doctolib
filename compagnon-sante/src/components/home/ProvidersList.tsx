import { Video } from "lucide-react";

type Provider = {
  id: string;
  name: string;
  specialty: string;
  city: string;
  avatar: string; 
  video?: boolean;
};

export default function ProvidersList({ providers }: { providers: Provider[] }) {
  return (
    <ul className="px-4 mt-2 space-y-3">
      {providers.map((p) => (
        <li key={p.id} className="flex gap-3 py-3 ">
          <img
            src={p.avatar}
            alt={p.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <a href="#" className="block font-semibold text-[17px] text-slate-900">
              {p.name}
            </a>
            <div className="mt-1 flex items-center gap-2 text-[15px] text-slate-700">
              {p.video && <Video className="h-4 w-4 text-[#0E73B8]" />}
              <span>{p.specialty}</span>
            </div>
            <div className="text-[15px] text-slate-700">{p.city}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
