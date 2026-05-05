import { Activity, Database, DollarSign } from 'lucide-react';
import { MetricCard } from '@/components/ui/MetricCard';

export default function GodModeDashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Platform Overview</h1>
        <p className="text-slate-500 mt-1">High-level logistics and system health.</p>
      </header>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Total Volume" value="$142,890.00" icon={<DollarSign size={18} />} extra="30d rolling window" />
        <MetricCard title="Platform Fees" value="$12,400.00" icon={<Database size={18} />} extra="Uncollected: $890" />
        <MetricCard title="Active Nodes" value="1,402" icon={<Activity size={18} />} extra={<span className="text-green-600 font-medium">99.8% Uptime</span>} />
      </div>
    </div>
  );
}
