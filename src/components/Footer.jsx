export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-10 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} LastMile. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <a href="#rider" className="hover:text-gray-900 dark:hover:text-white">Rider</a>
          <a href="#driver" className="hover:text-gray-900 dark:hover:text-white">Driver</a>
          <a href="#stations" className="hover:text-gray-900 dark:hover:text-white">Stations</a>
        </div>
      </div>
    </footer>
  );
}
