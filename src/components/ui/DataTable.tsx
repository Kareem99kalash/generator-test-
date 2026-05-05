import { ReactNode } from 'react';

export function DataTable({ headers, children }: { headers: string[]; children: ReactNode }) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-5 py-4">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {children}
        </tbody>
      </table>
    </div>
  );
}

export function DataRow({ children, isAlert = false }: { children: ReactNode; isAlert?: boolean }) {
  return (
    <tr className={`hover:bg-slate-50 transition-colors ${isAlert ? 'bg-red-50 hover:bg-red-100' : ''}`}>
      {children}
    </tr>
  );
}

export function DataCell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`px-5 py-4 ${className}`}>{children}</td>;
}
