import { useState } from 'react';
import { Menu, Home, User, Car, Train } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lastmile_role') || 'Rider';
    }
    return 'Rider';
  });

  const setRolePersist = (r) => {
    setRole(r);
    try {
      localStorage.setItem('lastmile_role', r);
    } catch {}
  };

  const NavLinks = () => (
    <nav className="flex flex-col gap-3 md:flex-row md:items-center">
      <a href="#home" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
        <Home className="h-4 w-4" /> Home
      </a>
      <a href="#rider" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
        <User className="h-4 w-4" /> Rider
      </a>
      <a href="#driver" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
        <Car className="h-4 w-4" /> Driver
      </a>
      <a href="#stations" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
        <Train className="h-4 w-4" /> Stations
      </a>
    </nav>
  );

  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-black/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden dark:text-gray-200 dark:hover:bg-gray-800"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
          <a href="#home" className="font-semibold tracking-tight text-gray-900 dark:text-white">
            LastMile
          </a>
          <span className="hidden rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 md:inline dark:bg-gray-800 dark:text-gray-300">
            Offline (Mock)
          </span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <NavLinks />
          <div className="ml-2 flex items-center gap-1 rounded-full bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => setRolePersist('Rider')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                role === 'Rider' ? 'bg-white shadow text-gray-900 dark:bg-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Rider
            </button>
            <button
              onClick={() => setRolePersist('Driver')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                role === 'Driver' ? 'bg-white shadow text-gray-900 dark:bg-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Driver
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200 px-4 py-4 md:hidden dark:border-gray-800">
          <div className="mb-4">
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              Offline (Mock)
            </span>
          </div>
          <NavLinks />
          <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => setRolePersist('Rider')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                role === 'Rider' ? 'bg-white shadow text-gray-900 dark:bg-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Rider
            </button>
            <button
              onClick={() => setRolePersist('Driver')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                role === 'Driver' ? 'bg-white shadow text-gray-900 dark:bg-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Driver
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
