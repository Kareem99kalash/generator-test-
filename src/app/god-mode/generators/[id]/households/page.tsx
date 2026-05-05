import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { DataTable, DataRow, DataCell } from '@/components/ui/DataTable';

const mockUsers = [
  { id: 'USR-801', name: 'House 1A', address: '123 Main St', amps: 12.4, kwh: 450, status: 'Active' },
  { id: 'USR-802', name: 'House 1B', address: '125 Main St', amps: 8.2, kwh: 310, status: 'Active' },
  { id: 'USR-803', name: 'House 2A', address: '42 Oak Ave', amps: 0.0, kwh: 12, status: 'Offline' },
  { id: 'USR-804', name: 'Apt 4B', address: '99 Pine St', amps: 5.1, kwh: 180, status: 'Active' },
  { id: 'USR-805', name: 'Villa 7', address: 'Hilltop Drive', amps: 25.0, kwh: 890, status: 'Active' },
];

export default async function GeneratorHouseholdsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const generatorId = resolvedParams.id;

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header className="space-y-4">
        <Link href="/god-mode/generators" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
          <ArrowLeft size={16} /> Back to Generators
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Connected Households</h1>
          <p className="text-slate-500 mt-1">Viewing all active and offline users for Generator {generatorId}.</p>
        </div>
      </header>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Household Directory</h2>
        <DataTable headers={['User ID', 'Household', 'Address', 'Live Draw (Amps)', 'Total Usage (kWh)', 'Status']}>
          {mockUsers.map((u) => (
            <DataRow key={u.id} isAlert={u.status === 'Offline'}>
              <DataCell className="font-mono text-slate-500 flex items-center gap-2">
                {u.status === 'Offline' && <AlertTriangle size={14} className="text-red-500" />}
                {u.id}
              </DataCell>
              <DataCell className="font-medium text-slate-900">{u.name}</DataCell>
              <DataCell className="text-slate-500">{u.address}</DataCell>
              <DataCell>
                <span className={`font-mono font-medium ${u.amps === 0 ? 'text-red-600' : 'text-slate-900'}`}>
                  {u.amps.toFixed(1)} A
                </span>
              </DataCell>
              <DataCell className="font-mono">{u.kwh} kWh</DataCell>
              <DataCell>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${u.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
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
