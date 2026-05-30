import Image from "next/image";
import type { Experience } from "@/types";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/data/portfolio";

function ExpCard({ exp }: { exp: Experience }) {
  return (
    <div className="relative pl-8 border-l-2 border-gray-800">
      {/* Titik timeline */}
      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-950" />

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition">
        <div className="flex items-center gap-4 mb-3">
          {exp.logo && (
            <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center overflow-hidden shrink-0">
              <Image src={exp.logo} width={40} height={40} alt={exp.company} className="object-contain" />
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-white">{exp.role}</p>
            <p className="text-xs text-gray-400">{exp.company} · {exp.period}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{exp.desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  if (experiences.length === 0) {
    return (
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="Pengalaman" title="Pengalaman Kerja & Magang" />
        <div className="bg-gray-900 border border-dashed border-gray-700 rounded-2xl p-10 text-center">
          <p className="text-gray-500 text-sm">
            <br />
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Pengalaman" title="Pengalaman Kerja & Magang" />
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExpCard key={`${exp.company}-${exp.period}`} exp={exp} />
        ))}
      </div>
    </section>
  );
}
