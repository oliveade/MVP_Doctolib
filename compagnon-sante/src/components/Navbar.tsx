"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HelpCircle, ChevronDown } from "lucide-react";

const items = [
  { href: "/aide", label: "Centre d'aide", icon: HelpCircle },
  { href: "/messages", label: "Mes messages" },
  { href: "/rendezvous", label: "Mes rendez-vous" },
  { href: "/documents", label: "Mes documents" },
];
function NavItem({
  href,
  label,
  icon: Icon,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "px-3 py-2 rounded-md text-white/90 hover:bg-white/15 transition",
        isActive ? "bg-white/20 font-semibold" : "",
        "flex items-center gap-2",
      ].join(" ")}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      <span>{label}</span>
    </Link>
  );
}
export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="bg-[#007CD0] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="h-14 flex items-center justify-between">

          <div className="flex items-center">
            <Link href="/" className="flex items-center">

              <span className="text-2xl font-semibold italic leading-none">
                Doctolib
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {items.map((it) => (
              <NavItem
                key={it.href}
                href={it.href}
                label={it.label}
                icon={it.icon}
                isActive={
                  it.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(it.href)
                }
              />
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/15"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <span>User Test</span>
              <ChevronDown className="h-4 w-4 opacity-90" />
            </button>
          </div>
        </div>
        
      </div>
    </header>
  );
}
