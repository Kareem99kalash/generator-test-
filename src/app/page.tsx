import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-950 font-sans min-h-screen text-zinc-50">
      <main className="flex flex-col items-center justify-center p-8 text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">IoT Billing Platform</h1>
        <p className="text-zinc-400 mb-12 text-lg">
          Welcome to the multi-tenant IoT billing and management system. Select your portal to continue.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <Link 
            href="/god-mode" 
            className="flex-1 flex items-center justify-center px-6 py-4 bg-zinc-50 text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-200"
          >
            God Mode (Admin)
          </Link>
          <Link 
            href="/tenant/dashboard" 
            className="flex-1 flex items-center justify-center px-6 py-4 bg-zinc-800 text-zinc-50 font-semibold rounded-lg hover:bg-zinc-700 transition-all duration-200 border border-zinc-700"
          >
            Tenant Portal
          </Link>
        </div>
      </main>
    </div>
  );
}
