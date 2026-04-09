import { Link } from "react-router-dom";

export default function EmptyState({ icon: Icon, title, description, actionLabel, actionTo }) {
  return (
    <div className="panel text-center">
      <div className="mx-auto mb-3 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-500">
        <Icon size={18} />
      </div>
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">{description}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="btn-soft mt-4">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
