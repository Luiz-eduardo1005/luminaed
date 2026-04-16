import { Link } from "react-router-dom";
import { currentUser, suggestions, trending } from "../../data/mockData";
import { useToast } from "../ui/Toast";

export default function RightPanel() {
  const { showToast } = useToast();

  return (
    <aside className="hidden w-full min-w-0 xl:block">
      <div className="grid grid-cols-2 gap-3">
      <div className="panel panel-hover col-span-2">
        <p className="text-sm font-bold text-ink-900">Progresso da semana</p>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
        </div>
        <p className="mt-2 text-xs text-ink-500">
          Sequência atual: <span className="font-bold text-brand-700">{currentUser.streak} dias</span>
        </p>
        <Link to="/app/estudos" className="btn-primary mt-4 w-full">
          Continuar estudando
        </Link>
      </div>

      <div className="panel">
        <p className="text-sm font-bold text-ink-900">Assuntos em alta</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {trending.map((tag) => (
            <span key={tag} className="pill transition hover:border-brand-200 hover:text-brand-700">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="panel">
        <p className="text-sm font-bold text-ink-900">Sugestões para seguir</p>
        <div className="mt-3 space-y-2.5">
          {suggestions.map((s) => (
            <div
              key={s.username}
              className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/60 p-2.5 dark:border-slate-700 dark:bg-slate-800/80"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink-900 dark:text-slate-100">{s.name}</p>
                <p className="truncate text-xs text-ink-500 dark:text-slate-400">@{s.username}</p>
              </div>
              <button
                onClick={() => showToast(`Agora você segue @${s.username}`)}
                className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Seguir
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </aside>
  );
}
