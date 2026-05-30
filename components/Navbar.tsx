"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/portfolio";

// Optimasi: "use client" hanya di Navbar (yang butuh state scroll).
// Semua komponen lain tetap Server Component → lebih cepat di-render Next.js.

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Tambah background saat scroll agar teks tetap terbaca
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/90 backdrop-blur border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / nama */}
        <a href="#home" className="text-sm font-semibold text-white tracking-wide">
          alfian<span className="text-blue-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden md:inline-flex text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
        >
          Hubungi Saya
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-400 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
