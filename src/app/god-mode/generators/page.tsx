"use client";

import { useState } from 'react';
import { DataTable, DataRow, DataCell } from '@/components/ui/DataTable';
import { CreateGeneratorButton } from '@/components/generators/CreateGeneratorButton';
import { ManageGeneratorModal } from '@/components/generators/ManageGeneratorModal';

const initialTenants = [
  { id: 'TNT-001', name: 'Alpha Generators', area: 'Downtown Zone A', status: 'Active', usersCount: 142, lat: 33.8938, lng: 35.5018 },
  { id: 'TNT-002', name: 'Omega Grid', area: 'North Hills', status: 'Active', usersCount: 89, lat: 33.9100, lng: 35.5300 },
  { id: 'TNT-003', name: 'Sigma Power', area: 'East Side', status: 'Stopped', usersCount: 0, lat: 33.8800, lng: 35.5100 },
];

export default function GeneratorsPage() {
  const [tenants, setTenants] = useState(initialTenants);

  const updateTenantStatus = (id: string, newStatus: string) => {
    setTenants(tenants.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Generator Owners</h1>
          <p className="text-slate-500 mt-1">Manage tenants, assign areas, and control access.</p>
        </div>
        <CreateGeneratorButton />
      </header>

      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Active Generator Owners</h2>
        <DataTable headers={['ID', 'Owner Name', 'Assigned Area', 'Status', 'Actions']}>
          {tenants.map((t) => (
            <DataRow key={t.id}>
              <DataCell className="font-mono text-slate-500">{t.id}</DataCell>
              <DataCell className="font-medium text-slate-900">{t.name}</DataCell>
              <DataCell>{t.area}</DataCell>
              <DataCell>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${t.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                  ● {t.status}
                </span>
              </DataCell>
              <DataCell>
                <ManageGeneratorModal tenant={t} onUpdateStatus={updateTenantStatus} />
              </DataCell>
            </DataRow>
          ))}
        </DataTable>
      </div>
    </div>
  );
}
