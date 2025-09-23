"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Heart, Mail, User } from "lucide-react";

const tabs = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/rendezvous", label: "Rendez-vous", icon: Calendar },
  { href: "/sante", label: "Santé", icon: Heart },
  { href: "/messages", label: "Messages", icon: Mail },
  { href: "/compte", label: "Compte", icon: User },
];

export default function TabBarBottom() {
  const p = usePathname();

  return (
    <nav
      className="
        fixed bottom-0 inset-x-0 z-50
        bg-white shadow-[0_-1px_8px_rgba(0,0,0,0.08)]
        border-t
        pb-[env(safe-area-inset-bottom)]
        sm:hidden
      "
      aria-label="Navigation principale"
    >
      <ul className="grid grid-cols-5">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? p === "/" : p.startsWith(href);
          return (
            <li key={href} className="flex">
              <Link
                href={href}
                className={[
                  "flex-1 flex flex-col items-center justify-center py-2 gap-1",
                  active ? "text-[#0E73B8] font-medium" : "text-slate-600",
                ].join(" ")}
              >
                <Icon className={`h-5 w-5 ${active ? "" : "opacity-70"}`} />
                <span className="text-[11px] leading-none">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
