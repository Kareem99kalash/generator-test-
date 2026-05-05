import { DataTable, DataRow, DataCell } from '@/components/ui/DataTable';

const mockHomeowners = [
  { id: 'USR-801', name: 'House 1A', address: '123 Main St', generator: 'Generator Alpha', kwh: 450, amps: 12.4, status: 'Active' },
  { id: 'USR-802', name: 'House 1B', address: '125 Main St', generator: 'Generator Alpha', kwh: 310, amps: 8.2, status: 'Active' },
  { id: 'USR-803', name: 'House 2A', address: '42 Oak Ave', generator: 'Generator Beta', kwh: 12, amps: 0.0, status: 'Offline' },
];

export default function HomeownersPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Homeowners</h1>
        <p className="text-slate-500 mt-1">View end-users, app users, and current electricity consumption.</p>
      </header>

      {/* Electricity Consumption Placeholder */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Real-Time Household Consumption</h2>
        <DataTable headers={['User ID', 'Household', 'Address', 'Generator', 'Current Draw (Amps)', 'Total Usage (kWh)', 'Status']}>
          {mockHomeowners.map((u) => (
            <DataRow key={u.id} isAlert={u.status === 'Offline'}>
              <DataCell className="font-mono text-slate-500">{u.id}</DataCell>
              <DataCell className="font-medium text-slate-900">{u.name}</DataCell>
              <DataCell className="text-slate-500">{u.address}</DataCell>
              <DataCell className="font-medium text-blue-600">{u.generator}</DataCell>
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
