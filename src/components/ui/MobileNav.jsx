import { Bell, BookOpen, Home, MessageCircle, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/app/feed", label: "Início", icon: Home },
  { to: "/app/estudos", label: "Estudos", icon: BookOpen },
  { to: "/app/notificacoes", label: "Avisos", icon: Bell },
  { to: "/app/mensagens", label: "Chat", icon: MessageCircle },
  { to: "/app/perfil", label: "Perfil", icon: User },
];

export default function MobileNav() {
  return (
    <nav className="mobile-nav fixed bottom-3 left-1/2 z-40 w-[95%] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-lg backdrop-blur md:hidden" style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}>
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center rounded-xl py-2 text-[11px] font-semibold transition ${
                  isActive ? "bg-brand-50 text-brand-700" : "text-slate-500 hover:bg-slate-50"
                }`
              }
            >
              <Icon size={15} />
              <span className="mt-1">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
