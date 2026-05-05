import { Zap, AlertTriangle, Send } from 'lucide-react';
import { DataTable, DataRow, DataCell } from '@/components/ui/DataTable';
import { Button } from '@/components/ui/Button';

const mockUsers = [
  { id: 'USR-801', name: 'House 1A', amps: 12.4, kwh: 450, status: 'PAID', anomaly: false },
  { id: 'USR-802', name: 'House 1B', amps: 8.2, kwh: 310, status: 'UNPAID', anomaly: false },
  { id: 'USR-803', name: 'House 2A', amps: 0.0, kwh: 12, status: 'UNPAID', anomaly: true },
];

export default function TenantDashboard() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto space-y-8 bg-slate-50">
      <header className="flex items-end justify-between border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Alpha Generators</h1>
          <p className="text-slate-500 mt-1">Tenant Operations Dashboard</p>
        </div>
        <Button variant="primary" className="flex items-center gap-2">
          <Send size={16} /> Trigger Billing Cycle
        </Button>
      </header>

      {/* Dynamic Rate Engine */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Zap size={20} className="text-slate-500" /> Rate Engine
        </h2>
        <div className="flex items-center gap-6">
          <div className="flex-1 max-w-xs">
            <label className="block text-sm font-medium text-slate-700 mb-2">Price per kWh</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-500 text-sm font-medium">$</span>
              <input type="number" defaultValue={0.15} step={0.01} className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 pl-8 pr-4 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all" />
            </div>
          </div>
          <div className="flex-1 max-w-xs">
            <label className="block text-sm font-medium text-slate-700 mb-2">Flat Amp Rate (Monthly)</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-500 text-sm font-medium">$</span>
              <input type="number" defaultValue={10.00} step={1.00} className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 pl-8 pr-4 text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Overview */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Node Telemetry & Billing</h2>
        <DataTable headers={['Node ID', 'Location', 'Live Draw (Amps)', 'Total Usage (kWh)', 'Est. Bill', 'Status']}>
          {mockUsers.map((u) => (
            <DataRow key={u.id} isAlert={u.anomaly}>
              <DataCell className="font-mono text-slate-500 flex items-center gap-2">
                {u.anomaly && <AlertTriangle size={16} className="text-red-500" />}
                {u.id}
              </DataCell>
              <DataCell className="font-medium text-slate-900">{u.name}</DataCell>
              <DataCell>
                <span className={`font-mono ${u.anomaly ? 'text-red-600 font-bold' : 'text-slate-700'}`}>{u.amps.toFixed(1)}</span>
              </DataCell>
              <DataCell className="font-mono text-slate-700">{u.kwh}</DataCell>
              <DataCell className="font-mono font-medium text-slate-900">${((u.kwh * 0.15) + 10.00).toFixed(2)}</DataCell>
              <DataCell>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${u.status === 'PAID' ? 'bg-slate-100 text-slate-600' : 'bg-amber-100 text-amber-800'}`}>
                  {u.status}
                </span>
              </DataCell>
            </DataRow>
          ))}
        </DataTable>
      </div>
    </div>
  );
}
