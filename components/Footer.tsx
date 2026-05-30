export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-8">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <span>© 2025 Alfian Indrajaya</span>
        <span>
          Dibuat dengan{" "}
          <span className="text-blue-400">Next.js</span> &{" "}
          <span className="text-blue-400">Tailwind CSS</span>
        </span>
      </div>
    </footer>
  );
}
