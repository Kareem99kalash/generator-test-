import { Button } from '@/components/ui/Button';

export default function MapPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 h-full flex flex-col">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Map Zoning</h1>
          <p className="text-slate-500 mt-1">Create polygons and assign generator service areas.</p>
        </div>
        <Button variant="primary">Create Zone</Button>
      </header>

      {/* Map Placeholder Container */}
      <div className="flex-1 bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center min-h-[500px] relative overflow-hidden">
        {/* Mock Zone Polygon UI */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 border-2 border-blue-500 rounded-tl-[100px] rounded-br-[80px] flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 text-center max-w-[250px]">
            <h3 className="font-bold text-slate-900">Downtown Zone A</h3>
            <p className="text-sm text-slate-500 mt-1">Provider: Alpha Generators</p>
            <p className="text-xs font-mono text-slate-400 mt-2 border-t pt-2">$0.15/kWh + $10/mo</p>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow border border-slate-200">
          <p className="text-sm font-medium text-slate-700">Interactive Map Placeholder</p>
          <p className="text-xs text-slate-500 mt-1">Leaflet or Mapbox integration goes here.</p>
        </div>
      </div>
    </div>
  );
}
