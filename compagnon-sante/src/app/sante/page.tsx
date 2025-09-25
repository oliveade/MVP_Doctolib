"use client";
import InfoTiles from "@/components/InfoTiles";
import HealthGoal from "@/components/HealthGoal";
import DocumentSection from "@/components/DocumentSection";
export default function SantePage() {
  const tips = [
    { id: "t1", text: "Oublie pas de marcher 10 min par jour, ça améliore la circulation sanguine", img: "/tips/ecg.jpg" },
    { id: "t2", text: "Bientôt novembre : le Mois sans tabac arrive, prêt·e à essayer ?", img: "/tips/stop.jpg" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#CFEFFF] to-white pb-24">
      <div className="px-4 pt-6">
        <h1 className="text-2xl font-bold">Tania T </h1>
      </div>
      <section className="mt-4 px-4">
        <div className="flex gap-4 overflow-x-auto pb-1">
          {tips.map(t => (
            <article key={t.id}
              className="min-w-[280px] rounded-xl bg-white shadow-md p-4 flex items-center gap-3">
              <p className="text-sm leading-snug">{t.text}</p>
              <img src={t.img} alt="" className="h-14 w-14 rounded-lg object-cover" />
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 mt-4">
        <HealthGoal
          title="Bilan cardiaque"
          step="Étape 2/3 : électrocardiogramme (ECG)"
          progress={18}
          onPrimary={() => alert("Prendre rendez-vous")}
        />
      </section>
      <section className="px-4 mt-4">
        <DocumentSection
          onView={() => alert("Voir mes documents")}
          onComplete={() => alert("Complétez mes documents")}
        />
      </section>
      <section className="px-4 mt-2 mb-8">
        <InfoTiles
          items={[
            { key:"antec", label:"Antécédents médicaux", icon:"stethoscope" },
            { key:"trait", label:"Traitements réguliers", icon:"capsule" },
            { key:"allerg", label:"Allergies", icon:"allergy", badge:1 },
            { key:"famil", label:"Antécédents familiaux", icon:"family" },
            { key:"op", label:"Opérations chirurgicales", icon:"hospital" },
            { key:"vacc", label:"Vaccins", icon:"syringe" },
            { key:"mes", label:"Mesures", icon:"chart" },
            { key:"hab", label:"Habitudes de vie", icon:"heart-hands" },
          ]}
          onClick={(k)=>alert(`Ouvrir ${k}`)}
        />
      </section>
    </main>
  );
}
