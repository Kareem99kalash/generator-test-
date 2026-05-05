import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AutomationPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Automation & Gateways</h1>
        <p className="text-slate-500 mt-1">Connect the platform to LoRaWAN gateways and external workflows.</p>
      </header>

      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6 max-w-3xl">
        <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <Settings size={20} className="text-slate-500" /> API & Webhooks
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">LoRaWAN Network Server Webhook (Inbound)</label>
            <div className="flex gap-2">
              <input type="text" readOnly value="https://api.platform.io/v1/wh/lorawan/uplink" className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono text-slate-600 focus:outline-none" />
              <Button variant="secondary">Copy</Button>
            </div>
            <p className="text-xs text-slate-500 mt-1">Point your ChirpStack or TTN server here to push usage telemetry.</p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <label className="block text-sm font-medium text-slate-700 mb-1">n8n Workflow Webhook (Outbound)</label>
            <input type="text" readOnly value="https://api.platform.io/v1/wh/n8n/trigger" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono text-slate-600 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Activepieces API Key</label>
            <div className="flex gap-2">
              <input type="password" readOnly value="sk_live_1234567890abcdef" className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono text-slate-600 focus:outline-none" />
              <Button variant="secondary">Regenerate</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
