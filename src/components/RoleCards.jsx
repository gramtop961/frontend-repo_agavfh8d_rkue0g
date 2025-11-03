import { User, Car, Clock, MapPin } from 'lucide-react';

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      {children}
    </div>
  );
}

export default function RoleCards() {
  return (
    <section id="roles" className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                <User className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Im a Rider</h3>
            </div>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Offline (Mock)</span>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Request a pooled pick-up from your metro station and get matched with a nearby driver.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> ETA in minutes</li>
            <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> 400 m geofence</li>
          </ul>
          <a href="#rider" className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black dark:bg-white dark:text-black">
            Go to Rider
          </a>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <Car className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Im a Driver</h3>
            </div>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Offline (Mock)</span>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Publish your route, seats, and approach to stations. Simulate movement and arrival ETA.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Station geofence</li>
            <li className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Live ETA simulation</li>
          </ul>
          <a href="#driver" className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black dark:bg-white dark:text-black">
            Go to Driver
          </a>
        </Card>
      </div>
    </section>
  );
}
