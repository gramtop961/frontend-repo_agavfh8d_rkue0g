import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RoleCards from './components/RoleCards';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      <Navbar />
      <main className="space-y-12">
        <HeroSection />
        <section id="rider">
          <RoleCards />
        </section>
        <section id="driver">
          {/* Intentionally using same cards as a teaser; full dashboards are mocked in future steps */}
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h2 className="text-xl font-semibold">Driver & Rider dashboards are mock-only in this starter</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">No APIs required — everything will run from local state and mock repositories.</p>
            </div>
          </div>
        </section>
        <section id="stations">
          <HowItWorks />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
