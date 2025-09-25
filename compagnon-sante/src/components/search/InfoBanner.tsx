import React from "react";
import Image from "next/image";
export default function InfoBanner() {
  return (
    <div className="rounded-2xl bg-[#D8ECFA] p-3 text-[14px] text-slate-700 flex gap-3">
      <div className=" rounded-xl flex items-center justify-center">
         <Image src="/avatar/care.png" alt=""  width={45} height={45} />
      </div>
      <p>
        Pour faciliter votre parcours de soins, il est recommandé de
        consulter d’abord un médecin généraliste avant de prendre rendez-vous
        avec un spécialiste.
      </p>
    </div>
  );
}
