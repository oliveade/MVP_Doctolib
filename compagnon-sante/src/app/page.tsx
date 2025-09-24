"use client";
import HomeHero from "@/components/home/HomeHero";
import ProgressCard from "@/components/home/ProgressCard";
import ProvidersList from "@/components/home/ProvidersList";

export default function Home() {
  const providers = [
    {
      id: "p1",
      name: "Dr Sarah MEDJANI",
      specialty: "Médecin généraliste",
      city: "Nanterre",
      avatar: "/avatar/Avatar.png",
      video: true,
    },
    {
      id: "p2",
      name: "Dr Sarah MEDJANI",
      specialty: "Médecin généraliste",
      city: "Nanterre",
      avatar: "/avatar/Avatar.png",
      video: true,
    },
    {
      id: "p3",
      name: "Dr Sarah MEDJANI",
      specialty: "Médecin généraliste",
      city: "Nanterre",
      avatar: "/avatar/Avatar.png",
      video: true,
    },
  ];

  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0">
      <HomeHero user="Clara" />
      <section className="px-4 mt-6 space-y-3">
        <ProgressCard
          icon="/avatar/tooth.png"
          title="Avoir de belle dents"
          stepText="1/5"
          barColor="#FFCD4D"
          value={20}
        />
        <ProgressCard
          icon="/avatar/medical.png"
          title="Mettre à jour le carnet de santé :"
          stepText="1/3"
          barColor="#007CD0"
          value={60}
        />
      </section>

      <section className="px-4 mt-6">
        <h2 className="text-[22px] font-semibold text-slate-900">Mes Soignants</h2>
      </section>

      <ProvidersList providers={providers} />
    </main>
  );
}
