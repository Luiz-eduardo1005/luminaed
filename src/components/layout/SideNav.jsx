import { NavLink } from "react-router-dom";
import {
  Bookmark,
  Compass,
  GraduationCap,
  House,
  Mail,
  Bell,
  CircleUserRound,
  TrendingUp,
  PenSquare,
} from "lucide-react";
import { feedbackFormUrl, currentUser, menuItems } from "../../data/mockData";
import { useToast } from "../ui/Toast";

function toPath(label) {
  const map = {
    Início: "/app/feed",
    Explorar: "/app/explorar",
    Estudos: "/app/estudos",
    Notificações: "/app/notificacoes",
    Mensagens: "/app/mensagens",
    Perfil: "/app/perfil",
    Salvos: "/app/salvos",
    Progresso: "/app/progresso",
  };
  return map[label] || "/app/feed";
}

export default function SideNav() {
  const { showToast } = useToast();
  const iconMap = {
    Início: House,
    Explorar: Compass,
    Estudos: GraduationCap,
    Notificações: Bell,
    Mensagens: Mail,
    Perfil: CircleUserRound,
    Salvos: Bookmark,
    Progresso: TrendingUp,
  };

  return (
    <aside className="hidden w-72 self-start flex-col gap-3 xl:flex">
      <div className="panel flex items-center gap-3">
        <div className="rounded-2xl bg-brand-600 p-2.5 text-white shadow-card">
          <GraduationCap size={18} />
        </div>
        <div>
          <p className="text-lg font-extrabold text-ink-900">LuminaEd</p>
          <p className="text-xs text-ink-500">Aprender junto</p>
        </div>
      </div>

      <nav className="panel space-y-1 p-2.5">
        {menuItems.map((item) => {
          const Icon = iconMap[item.label] || House;
          return (
          <NavLink
            key={item.label}
            to={toPath(item.label)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-brand-50 text-brand-700 shadow-sm"
                  : "text-ink-700 hover:bg-slate-50"
              }`
            }
          >
            <Icon size={17} />
            {item.label}
          </NavLink>
        )})}
        <button className="btn-primary mt-3 w-full gap-2">
          <PenSquare size={15} />
          Publicar
        </button>
        <a
          href={feedbackFormUrl || "#"}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => {
            if (!feedbackFormUrl) {
              event.preventDefault();
              showToast("Link de avaliação será adicionado em breve");
            }
          }}
          className="btn-soft mt-2 w-full"
        >
          Avaliar o site
        </a>
      </nav>

      <div className="panel panel-hover mt-auto flex items-center gap-3">
        <img src={currentUser.avatar} alt={currentUser.name} className="h-10 w-10 rounded-full border border-slate-200" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink-900">{currentUser.name}</p>
          <p className="truncate text-xs text-ink-500">@{currentUser.username}</p>
        </div>
      </div>
    </aside>
  );
}
