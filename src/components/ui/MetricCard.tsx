import { ReactNode } from 'react';

export function MetricCard({ title, value, icon, extra }: { title: string; value: string | number; icon?: ReactNode; extra?: ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col gap-1 shadow-sm">
      <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
        {title}
        {icon && <span className="text-slate-400">{icon}</span>}
      </div>
      <div className="text-3xl font-semibold tracking-tight text-slate-900 mt-2">{value}</div>
      {extra && <div className="mt-2 text-sm text-slate-500">{extra}</div>}
    </div>
  );
}
