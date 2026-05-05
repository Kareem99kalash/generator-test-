"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { X, Users, MapPin, Activity } from 'lucide-react';

export function ManageGeneratorModal({ tenant, onUpdateStatus }: { tenant: any, onUpdateStatus: (id: string, s: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentTerm, setPaymentTerm] = useState('flat');

  const handleStatusChange = (newStatus: string) => {
    onUpdateStatus(tenant.id, newStatus);
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>Manage</Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-slate-900">{tenant.name}</h2>
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
                  <span className="text-xs font-medium text-slate-500 pl-2">Status:</span>
                  <select 
                    value={tenant.status} 
                    onChange={(e) => handleStatusChange(e.target.value)}
                    className={`px-3 py-1 rounded-md text-xs font-bold border-0 cursor-pointer focus:ring-2 focus:ring-offset-1 appearance-none outline-none ${tenant.status === 'Active' ? 'bg-green-50 text-green-700 focus:ring-green-500' : 'bg-red-50 text-red-700 focus:ring-red-500'}`}
                  >
                    <option value="Active">● Active</option>
                    <option value="Stopped">● Stopped</option>
                  </select>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors bg-white hover:bg-slate-100 p-1 rounded-md"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Clickable Households Card */}
                <Link 
                  href={`/god-mode/generators/${tenant.id}/households`}
                  className="group border border-slate-200 rounded-xl p-4 bg-slate-50 flex items-center gap-4 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all cursor-pointer relative"
                >
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">Connected Households</p>
                    <p className="text-2xl font-bold text-slate-900">{tenant.usersCount} <span className="text-sm font-normal text-slate-500 ml-1 group-hover:text-slate-600 transition-colors">Active Users</span></p>
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    View Details &rarr;
                  </div>
                </Link>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Current Load</p>
                    <p className="text-2xl font-bold text-slate-900">{tenant.usersCount * 4.2} <span className="text-sm font-normal text-slate-500 ml-1">Amps (Est.)</span></p>
                  </div>
                </div>
              </div>

              {/* Financials & Billing */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-800 mb-3">Financials & Billing</h3>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium text-slate-700">Payment Term</p>
                    <p className="text-xs text-slate-500">Agreed fee structure with the tenant.</p>
                  </div>
                  <select 
                    value={paymentTerm}
                    onChange={(e) => setPaymentTerm(e.target.value)}
                    className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="flat">Flat Fee</option>
                    <option value="percentage">Percentage (%)</option>
                  </select>
                </div>
                {paymentTerm === 'flat' && (
                  <div className="flex justify-end items-center gap-3 pt-3 border-t border-slate-100">
                    <label className="text-sm font-medium text-slate-700">Amount ($):</label>
                    <input type="number" defaultValue={100} className="w-24 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono" />
                  </div>
                )}
                {paymentTerm === 'percentage' && (
                  <div className="flex justify-end items-center gap-3 pt-3 border-t border-slate-100">
                    <label className="text-sm font-medium text-slate-700">Percentage (%):</label>
                    <input type="number" defaultValue={15} max="100" className="w-24 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono" />
                  </div>
                )}
              </div>

              {/* Location & Map */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                  <MapPin size={18} className="text-slate-400" /> Service Location & Zone Coverage
                </h3>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-sm text-slate-700 mb-4"><span className="font-semibold">Assigned Zone:</span> {tenant.area}</p>
                  
                  {/* Real Map iframe (OpenStreetMap) */}
                  <div className="w-full h-[300px] rounded-lg overflow-hidden border border-slate-300 relative bg-slate-200">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      scrolling="no" 
                      marginHeight={0} 
                      marginWidth={0} 
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${tenant.lng - 0.01}%2C${tenant.lat - 0.01}%2C${tenant.lng + 0.01}%2C${tenant.lat + 0.01}&layer=mapnik&marker=${tenant.lat}%2C${tenant.lng}`}
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  <div className="mt-2 text-right">
                    <a href={`https://www.openstreetmap.org/?mlat=${tenant.lat}&mlon=${tenant.lng}#map=16/${tenant.lat}/${tenant.lng}`} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline">
                      View Larger Map
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
              <Button onClick={() => setIsOpen(false)} variant="secondary">
                Close
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
