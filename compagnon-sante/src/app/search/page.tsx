"use client";
import SearchHeader from "@/components/search/SearchHeader";
import SearchBox from "@/components/search/SearchBox";
import InfoBanner from "@/components/search/InfoBanner";

import SpecialtyGrid, { Specialty } from "@/components/search/SpecialityGrid";

const specialties: Specialty[] = [
    { key: "allergo", title: "Allergologie", subtitle: "Soulage et accompagne face aux allergies", icon: "/avatar/derm.png" },
    { key: "dermato", title: "Dermatologie", subtitle: "Prend soin de votre peau", icon: "/avatar/derm.png" },
    { key: "gyneco", title: "Gynécologie et obstétrique", subtitle: "Santé féminine, grossesse et accouchement", icon: "/avatar/derm.png" },
    { key: "medgen", title: "Médecine générale", subtitle: "Suivi global et soins courants", icon: "/avatar/derm.png" },
    { key: "onco", title: "Oncologie", subtitle: "Prévention et traitement des cancers", icon: "/avatar/derm.png" },
    { key: "pneumo", title: "Pneumologie", subtitle: "Maladies des poumons et respiration", icon: "/avatar/derm.png" },
    { key: "pedia", title: "Pédiatrie", subtitle: "Santé et suivi des enfants", icon: "/avatar/derm.png" },
    { key: "psy", title: "Psychiatrie", subtitle: "Santé mentale et troubles psychique", icon: "/avatar/derm.png" },
    { key: "radio", title: "Radiologie", subtitle: "Imagerie médicale pour diagnostic", icon: "/avatar/derm.png" },
    { key: "uro", title: "Urologie", subtitle: "Appareil urinaire et santé masculine", icon: "/avatar/derm.png" },
];

export default function RecherchePage() {
    return (
        <main className="min-h-screen bg-[#F6F9FB] pb-24">
            <div className="bg-gradient-to-b from-[#DFF3FF] to-[#F6F9FB]">
                <SearchHeader />
                <section className="px-4">
                    <h1 className="text-[20px] font-semibold text-slate-900 mt-6 text-center">
                        Trouvez votre professionnel de soins idéal
                    </h1>

                    <div className="mt-3 rounded-2xl bg-white p-3 shadow-[0_6px_16px_rgba(0,0,0,0.06)] h-auto">
                        <SearchBox />
                        {/* <div className="mt-3 grid grid-cols-3 gap-2">
              <button className="h-10 rounded-full border bg-white px-3 text-sm font-semibold flex items-center justify-center gap-2">
                <img src="/avatar/filtre.png" alt="" className="h-4 w-4" />
                Filtres
              </button>
              <button className="h-10 rounded-full border bg-white px-3 text-sm font-semibold flex items-center justify-center gap-2">
                <img src="/avatar/agenda.png" alt="" className="h-4 w-4" />
                Disponibilités
              </button>
              <button className="h-10 rounded-full border bg-white px-3 text-sm font-semibold flex items-center justify-center gap-2">
                <img src="/avatar/location.png" alt="" className="h-4 w-4" />
                Secteur
              </button>
                        </div> */}

                        <div className="mt-3 flex flex-wrap gap-3">
                            <button className="h-10 rounded-full border bg-white px-4 text-sm font-semibold flex items-center gap-2">
                                <img src="/avatar/filtre.png" className="h-4 w-4" />
                                Filtres
                            </button>
                            <button className="h-10 rounded-full border bg-white px-4 text-sm font-semibold flex items-center gap-2">
                                <img src="/avatar/agenda.png" className="h-4 w-4" />
                                Disponibilités
                            </button>
                            <button className="h-10 rounded-full border bg-white px-4 text-sm font-semibold flex items-center gap-2">
                                <img src="/avatar/location.png" className="h-4 w-4" />
                                Secteur
                            </button>
                        </div>

                    </div>

                    <div className="mt-3">
                        <InfoBanner />
                    </div>
                </section>
            </div>

            <section className="px-4 mt-4">
                <SpecialtyGrid items={specialties} onSelect={(s) => location.href = `/search/${s.key}`} />
            </section>
        </main>
    );
}
