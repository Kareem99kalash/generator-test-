import React from 'react';
import { Layers, Database, Code2, Zap, Server, Shield, Activity, Users, FileText, Blocks, Cpu, BarChart3 } from 'lucide-react';

export default function PRDPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-[#111] selection:text-white">
      {/* Header */}
      <header className="border-b border-[#eaeaea] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#111] text-white flex items-center justify-center rounded-md font-bold shadow-sm">
              <FileText size={18} />
            </div>
            <span className="font-semibold tracking-tight text-lg">Product Requirements</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-[#666]">
            <a href="#overview" className="hover:text-[#111] transition-colors">Overview</a>
            <a href="#stack" className="hover:text-[#111] transition-colors">Tech Stack</a>
            <a href="#architecture" className="hover:text-[#111] transition-colors">Architecture</a>
            <a href="#logic" className="hover:text-[#111] transition-colors">Business Logic</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Hero Section */}
        <section className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f3f3] text-sm font-medium border border-[#eaeaea]">
            <Activity size={14} />
            <span>Living Document • Last Updated Today</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-[#111] leading-tight">
            Multi-Tenant IoT Billing & Management Platform
          </h1>
          <p className="text-xl text-[#666] leading-relaxed">
            A comprehensive, high-density SaaS platform designed to manage decentralized generator grids. It connects IoT hardware nodes with automated billing, providing tiered access for super administrators, local generator operators, and end-user households.
          </p>
        </section>

        {/* Tech Stack */}
        <section id="stack" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Technology Stack</h2>
            <p className="text-[#666]">Modern, edge-ready, and highly scalable technologies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Blocks size={20} />, title: "Framework", desc: "Next.js 16 (App Router), React 19 for server-rendered, highly performant UI." },
              { icon: <Database size={20} />, title: "Database", desc: "PostgreSQL managed via Prisma ORM for robust relational data and schema type-safety." },
              { icon: <Code2 size={20} />, title: "Styling", desc: "TailwindCSS v4 for utility-first, monochromatic, and meticulously responsive design." },
              { icon: <Server size={20} />, title: "Backend", desc: "Next.js Server Actions & API Routes for seamless full-stack data mutation." },
              { icon: <Zap size={20} />, title: "Icons", desc: "Lucide React providing clean, consistent, and customizable SVG iconography." },
              { icon: <Cpu size={20} />, title: "Integrations", desc: "Designed for seamless n8n automation and third-party IoT gateway syncing." }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-[#eaeaea] shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#ccc]">
                <div className="w-10 h-10 bg-[#f9f9f9] border border-[#eee] rounded-xl flex items-center justify-center text-[#111] mb-4 group-hover:bg-[#111] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Data Architecture</h2>
            <p className="text-[#666]">Hierarchical relational database structure modeling the real-world utility grid.</p>
          </div>

          <div className="bg-[#111] text-[#a0a0a0] rounded-3xl p-8 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white">
                    <Shield size={20} />
                    <h3 className="text-xl font-semibold">SuperAdmin</h3>
                  </div>
                  <p className="text-sm leading-relaxed">Top-level entity holding platform-wide access. Can manage tenants, suspend accounts, and view global metrics.</p>
                </div>

                <div className="space-y-3 pl-6 border-l border-white/10 relative">
                  <div className="absolute top-4 -left-[5px] w-2 h-2 rounded-full bg-white/20" />
                  <div className="flex items-center gap-3 text-white">
                    <Layers size={18} />
                    <h3 className="text-lg font-semibold">Tenant (Generator Operator)</h3>
                  </div>
                  <p className="text-sm leading-relaxed">Represents a local grid manager. Configures financial terms (pricePerKwh, flatAmpRate), manages hardware, and tracks platform fee payments.</p>
                </div>

                <div className="space-y-3 pl-12 border-l border-white/10 relative ml-6">
                  <div className="absolute top-4 -left-[5px] w-2 h-2 rounded-full bg-white/20" />
                  <div className="flex items-center gap-3 text-white">
                    <Users size={16} />
                    <h3 className="font-semibold">User (Household)</h3>
                  </div>
                  <p className="text-sm leading-relaxed">The end consumer. Attached to a specific tenant. Receives invoices and holds hardware nodes.</p>
                </div>
              </div>

              <div className="space-y-8 lg:mt-16">
                <div className="space-y-3 pl-6 border-l border-white/10 relative">
                  <div className="absolute top-4 -left-[5px] w-2 h-2 rounded-full bg-white/20" />
                  <div className="flex items-center gap-3 text-white">
                    <Cpu size={18} />
                    <h3 className="text-lg font-semibold">HardwareNode</h3>
                  </div>
                  <p className="text-sm leading-relaxed">IoT meter installed at the user's location. Tracks MAC addresses, gateway links, and online/offline status.</p>
                </div>

                <div className="space-y-3 pl-12 border-l border-white/10 relative ml-6">
                  <div className="absolute top-4 -left-[5px] w-2 h-2 rounded-full bg-white/20" />
                  <div className="flex items-center gap-3 text-white">
                    <Activity size={16} />
                    <h3 className="font-semibold">UsageReading</h3>
                  </div>
                  <p className="text-sm leading-relaxed">High-frequency timeseries data logging current kWh and Amperage. Used for billing calculation.</p>
                </div>

                <div className="space-y-3 pl-12 border-l border-white/10 relative ml-6">
                  <div className="absolute top-4 -left-[5px] w-2 h-2 rounded-full bg-white/20" />
                  <div className="flex items-center gap-3 text-white">
                    <FileText size={16} />
                    <h3 className="font-semibold">Invoice</h3>
                  </div>
                  <p className="text-sm leading-relaxed">Generated billing records mapping usage data to tenant-defined financial terms. Tracks PAID/UNPAID states.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Logic */}
        <section id="logic" className="space-y-8 scroll-mt-24 pb-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Core Business Logic</h2>
            <p className="text-[#666]">How the platform handles operations, pricing, and workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f9f9f9] border border-[#eaeaea] rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center border border-[#eee] mb-6">
                <BarChart3 size={24} className="text-[#111]" />
              </div>
              <h3 className="text-xl font-bold">Billing & Pricing Models</h3>
              <p className="text-[#666] leading-relaxed">
                Tenants can configure multiple pricing strategies. The system supports <strong>pricePerKwh</strong> for consumption-based billing, and <strong>flatAmpRate</strong> for fixed capacity billing. Invoices are generated by aggregating UsageReading data over the billing cycle and applying the tenant's active rates.
              </p>
            </div>

            <div className="bg-[#f9f9f9] border border-[#eaeaea] rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center border border-[#eee] mb-6">
                <Layers size={24} className="text-[#111]" />
              </div>
              <h3 className="text-xl font-bold">God Mode (SuperAdmin View)</h3>
              <p className="text-[#666] leading-relaxed">
                A dedicated interface for platform operators. It allows the creation and management of Tenants (Generators), tracking if their platform fees are paid, suspending rogue tenants, and viewing macro-level hardware status across the entire network.
              </p>
            </div>

            <div className="bg-[#f9f9f9] border border-[#eaeaea] rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center border border-[#eee] mb-6">
                <Cpu size={24} className="text-[#111]" />
              </div>
              <h3 className="text-xl font-bold">Hardware & Telemetry</h3>
              <p className="text-[#666] leading-relaxed">
                HardwareNodes represent physical meters with unique MAC addresses. They report telemetry via external gateways. The platform tracks connection health (ONLINE/OFFLINE) and provides interfaces to gracefully toggle or disconnect nodes from the grid.
              </p>
            </div>

            <div className="bg-[#f9f9f9] border border-[#eaeaea] rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center border border-[#eee] mb-6">
                <Zap size={24} className="text-[#111]" />
              </div>
              <h3 className="text-xl font-bold">Automation Readiness</h3>
              <p className="text-[#666] leading-relaxed">
                The architecture is designed to interface directly with workflow automation tools (like n8n). Events such as missing payments or offline nodes can trigger webhooks to auto-suspend service or notify tenants via SMS/Email without manual intervention.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
