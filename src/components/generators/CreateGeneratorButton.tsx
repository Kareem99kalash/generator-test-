"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { X, MapPin, FileText, User, Map as MapIcon, Building, Shield } from 'lucide-react';

export function CreateGeneratorButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentTerm, setPaymentTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual submission logic
    setIsOpen(false);
    setPaymentTerm(''); // reset state
  };

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        + Create Generator
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Shield size={20} className="text-blue-600" /> 
                Register New Generator Owner
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1">
              <form id="create-generator-form" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-800 border-b border-slate-100 pb-2">Owner Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                      <User size={16} className="text-slate-400" /> Owner Name
                    </label>
                    <input required type="text" placeholder="e.g. John Doe" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                </div>

                {/* Location Info */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-800 border-b border-slate-100 pb-2">Location & Coverage</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                        <Building size={16} className="text-slate-400" /> City
                      </label>
                      <input required type="text" placeholder="e.g. Beirut" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                        <MapIcon size={16} className="text-slate-400" /> Municipality
                      </label>
                      <input required type="text" placeholder="e.g. Achrafieh" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                      <MapPin size={16} className="text-slate-400" /> Assigned Area
                    </label>
                    <input required type="text" placeholder="e.g. Downtown Zone A" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Map Pin (Coordinates)</label>
                    <input type="text" placeholder="33.8880518, 35.5055841" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono" />
                    <p className="text-xs text-slate-500 mt-1">Paste directly from Google Maps (e.g. 33.88805, 35.50558)</p>
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-800 border-b border-slate-100 pb-2">Technical & Legal</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Usage Type</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-slate-50 border-slate-300 rounded focus:ring-blue-500" />
                        <span className="text-sm text-slate-900">kWh</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-slate-50 border-slate-300 rounded focus:ring-blue-500" />
                        <span className="text-sm text-slate-900">Amps</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                      <FileText size={16} className="text-slate-400" /> Agreement Picture
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors">
                      <input type="file" id="agreement-upload" className="hidden" accept="image/*,.pdf" />
                      <label htmlFor="agreement-upload" className="cursor-pointer flex flex-col items-center">
                        <FileText size={24} className="text-slate-400 mb-2" />
                        <span className="text-sm font-medium text-blue-600 hover:text-blue-700">Click to upload agreement</span>
                        <span className="text-xs text-slate-500 mt-1">PNG, JPG, or PDF up to 10MB</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Financials & Billing */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-800 border-b border-slate-100 pb-2">Financials & Billing</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Payment Term</label>
                      <select required value={paymentTerm} onChange={(e) => setPaymentTerm(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
                        <option value="">Select term...</option>
                        <option value="flat">Flat Fee</option>
                        <option value="percentage">Percentage (%)</option>
                      </select>
                    </div>
                    {paymentTerm === 'flat' && (
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Flat Fee Amount ($)</label>
                        <input required type="number" placeholder="e.g. 100" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono" />
                      </div>
                    )}
                    {paymentTerm === 'percentage' && (
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Percentage Cut (%)</label>
                        <input required type="number" placeholder="e.g. 15" max="100" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono" />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Accepted Payment Methods</label>
                    <div className="flex flex-wrap gap-4">
                      {['Whish', 'OMT', 'Online Payment', 'Bank Transfer', 'Cash'].map(method => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 bg-slate-50 border-slate-300 rounded focus:ring-blue-500" />
                          <span className="text-sm text-slate-900">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

              </form>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
              <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" form="create-generator-form" variant="primary">
                Create Generator
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
