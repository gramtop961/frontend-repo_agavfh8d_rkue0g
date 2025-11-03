import { MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: 'Pick your station',
      desc: 'Choose from nearby metro stations and set your destination area.',
    },
    {
      icon: Clock,
      title: 'Set your ETA',
      desc: 'Tell us when you want to be picked up. Well match before your ETA.',
    },
    {
      icon: CheckCircle2,
      title: 'Hop in and go',
      desc: 'Meet at the stations geofence for a quick pooled ride.',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-center text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white">How it works</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
