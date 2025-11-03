import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[68vh] w-full overflow-hidden rounded-none">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/90 dark:to-black/80" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl font-semibold leading-tight drop-shadow md:text-6xl">Metro last-mile rides, made simple</h1>
        <p className="mt-4 max-w-2xl text-base text-gray-100 md:text-lg">
          LastMile connects riders and drivers around metro stations with fast, pooled pick-ups within 400 meters.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#rider" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow hover:bg-gray-100">
            Im a Rider
          </a>
          <a href="#driver" className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20">
            Im a Driver
          </a>
        </div>
      </div>
    </section>
  );
}
