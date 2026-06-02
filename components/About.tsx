import SectionHeader from "@/components/SectionHeader";

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-blue-400">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Tentang Saya" title="Siapa Saya?" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            Saya adalah lulusan <span className="text-white font-medium">Teknik Informatika</span> dari{" "}
            <span className="text-white font-medium">Universitas Tarumanagara</span>, Jakarta. Selama kuliah
            saya mendalami bidang data — mulai dari analisis, rekayasa pipeline, hingga pemodelan machine learning.
          </p>
          <p>
            Saat ini saya sedang memperluas keahlian ke{" "}
            <span className="text-white font-medium">JavaScript dan React</span> agar bisa membangun
            aplikasi web yang menggabungkan kekuatan data dengan antarmuka yang modern dan responsif.
          </p>
          <p>
            Saya percaya bahwa data yang baik, disajikan dengan tepat, bisa mengubah cara sebuah
            bisnis mengambil keputusan. Itulah yang mendorong saya untuk terus belajar dan berkontribusi.
          </p>

          <div className="pt-4">
            <a
              href="/Portofolio/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition"
            >
              📄 Download CV
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-8">
            <StatItem value="4+"   label="Proyek Selesai"         />
            <StatItem value="2+"   label="Bahasa Pemrograman"     />
            <StatItem value="3+"   label="Domain Keahlian"        />
            <StatItem value="2026" label="Tahun Lulus"            />
          </div>

          <hr className="border-gray-800 my-6" />

          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
              Saat ini sedang belajar
            </p>
            {["Next.js App Router", "TypeScript", "Data Pipeline (Airflow)"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
