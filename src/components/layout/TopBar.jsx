import { Bell, BookOpen, MessageCircle, Moon, Search, Sun, UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar({ resolvedTheme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-20 mb-4 border border-slate-200/90 bg-white/80 px-2 py-2.5 backdrop-blur-xl md:mb-5 md:px-3 md:py-3 md:rounded-2xl">
      <div className="flex items-center gap-1.5 md:gap-3">
        <Link to="/app/feed" className="rounded-xl bg-brand-600 px-3 py-2 text-xs font-bold text-white shadow-card transition hover:bg-brand-700 md:px-3.5 md:text-sm">
          LuminaEd
        </Link>
        <div className="relative hidden flex-1 md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input className="input-base pl-9" placeholder="Buscar conteúdos, hashtags, alunos..." />
        </div>
        <div className="ml-auto flex items-center gap-0.5 md:gap-1">
          <button
            onClick={toggleTheme}
            className="top-nav-button mr-1 rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-100"
            aria-label="Alternar tema"
            title="Alternar tema"
          >
            {resolvedTheme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <Link to="/app/estudos" className="hidden rounded-xl border border-brand-100 bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700 transition hover:bg-brand-100 sm:inline-flex md:text-sm">
            <span className="hidden md:inline">Área de </span>Estudos
          </Link>
          <Link to="/app/notificacoes" className="hidden rounded-xl p-2 text-ink-500 transition hover:bg-slate-100 hover:text-ink-900 sm:inline-flex">
            <Bell size={18} />
          </Link>
          <Link to="/app/mensagens" className="hidden rounded-xl p-2 text-ink-500 transition hover:bg-slate-100 hover:text-ink-900 sm:inline-flex">
            <MessageCircle size={18} />
          </Link>
          <Link to="/app/perfil" className="rounded-xl p-2 text-ink-500 transition hover:bg-slate-100 hover:text-ink-900">
            <UserCircle2 size={18} />
          </Link>
          <Link to="/app/estudos" className="hidden rounded-xl p-2 text-ink-500 transition hover:bg-slate-100 hover:text-ink-900 md:inline-flex">
            <BookOpen size={18} />
          </Link>
        </div>
      </div>
      <div className="relative mt-2 md:hidden">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
        <input className="input-base pl-9 text-sm" placeholder="Buscar conteúdos e alunos..." />
      </div>
    </header>
  );
}
