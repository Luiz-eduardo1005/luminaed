import { Link } from "react-router-dom";

export default function SubjectCard({ subject }) {
  const Icon = subject.icon;

  return (
    <div className="panel panel-hover flex h-full flex-col overflow-hidden p-0">
      <div className="subject-card-head border-b border-slate-200 bg-gradient-to-r from-white to-brand-50/40 px-5 py-4">
        <div className="mb-3 inline-flex w-fit rounded-2xl border border-brand-100 bg-brand-50 p-2.5 text-brand-700">
          <Icon size={18} />
        </div>
        <h3 className="text-lg font-bold text-ink-900">{subject.name}</h3>
        <p className="mt-1 text-sm leading-6 text-ink-500">{subject.description}</p>
        <p className="mt-2 text-xs font-semibold text-brand-700">{subject.highlight}</p>
      </div>

      <div className="space-y-4 px-5 py-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold text-ink-500">Progresso da disciplina</p>
            <p className="text-xs font-bold text-ink-700">{subject.progress}%</p>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" style={{ width: `${subject.progress}%` }} />
          </div>
        </div>

        <Link to={`/app/disciplinas/${subject.id}`} className="btn-soft mt-auto w-full">
          Acessar disciplina
        </Link>
      </div>
    </div>
  );
}
