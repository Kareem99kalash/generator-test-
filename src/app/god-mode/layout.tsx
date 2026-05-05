"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Zap, Users, Map, Settings } from 'lucide-react';

const sidebarLinks = [
  { href: '/god-mode', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { href: '/god-mode/generators', label: 'Generators', icon: <Zap size={20} /> },
  { href: '/god-mode/homeowners', label: 'Homeowners', icon: <Users size={20} /> },
  { href: '/god-mode/map', label: 'Map Zone', icon: <Map size={20} /> },
  { href: '/god-mode/automation', label: 'Automation', icon: <Settings size={20} /> },
];

export default function GodModeLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <span className="text-xl font-bold text-slate-900 tracking-tight">God Mode</span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-200 text-xs text-slate-500">
          SYS_TIME: {new Date().toISOString().split('T')[0]}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
