import React from "react";
export default function InfoBanner() {
  return (
    <div className="rounded-2xl bg-[#D8ECFA] p-3 text-[14px] text-slate-700 flex gap-3">
      <div className="h-9 w-9 rounded-xl bg-[#EAF5FE] flex items-center justify-center">
        <img src="/avatar/care.png" alt="" className="h-5 w-5" />
      </div>
      <p>
        Pour faciliter votre parcours de soins, il est recommandé de
        consulter d’abord un médecin généraliste avant de prendre rendez-vous
        avec un spécialiste.
      </p>
    </div>
  );
}
