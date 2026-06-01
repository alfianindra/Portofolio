import Image from "next/image";
import { tags } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col-reverse md:flex-row md:items-center gap-12"
    >
      <div className="flex-1">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400 border border-emerald-400/30 rounded-full px-3 py-1 mb-6">
          {/* Dot animasi — CSS class kecil, tidak perlu komponen sendiri */}
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to work
        </span>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Halo, Saya{" "}
          <span className="text-blue-400">Alfian</span>
          <br />
          Indrajaya
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-lg">
          Fresh graduate Teknik Informatika Universitas Tarumanagara. Fokus di{" "}
          <span className="text-white font-medium">data science</span>,{" "}
          <span className="text-white font-medium">analytics</span>, dan{" "}
          <span className="text-white font-medium">web development</span>.
        </p>

        <p className="text-gray-500 text-sm mb-8 max-w-md">
          Mencari peluang untuk berkontribusi dalam tim yang menggunakan data dan teknologi
          untuk memecahkan masalah nyata.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs text-gray-400 border border-gray-700 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-full transition"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="border border-gray-700 hover:border-gray-400 text-gray-400 hover:text-white text-sm px-6 py-3 rounded-full transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>

      {/* Foto — taruh /pasfoto.jpg di folder /public */}
      <div className="shrink-0 relative">
        <div className="w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-gray-800 relative">
          <Image
            src="/Portofolio/pasfoto.jpg"
            fill
            alt="Alfian Indrajaya"
            className="object-cover"
            priority
          />
        </div>
        {/* Badge dekoratif */}
        <div className="absolute -bottom-3 -right-3 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-300">
          📍 Jakarta, Indonesia
        </div>
      </div>
    </section>
  );
}
