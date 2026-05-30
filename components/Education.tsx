import Image from "next/image";
import type { Education } from "@/types";
import SectionHeader from "@/components/SectionHeader";
import { educations } from "@/data/portfolio";

function EduCard({ edu }: { edu: Education }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500/30 transition">
      {/* Logo institusi — opsional */}
      <div className="w-14 h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0 overflow-hidden">
        {edu.logo ? (
          <Image src={edu.logo} width={56} height={56} alt={edu.school} className="object-contain" />
        ) : (
          <span className="text-2xl">🎓</span>
        )}
      </div>

      <div>
        <p className="text-sm font-semibold text-white">{edu.school}</p>
        <p className="text-sm text-gray-400 mt-0.5">{edu.degree}</p>
        <p className="text-xs text-blue-400 mt-1">{edu.year}</p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Pendidikan" title="Riwayat Pendidikan" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {educations.map((edu) => (
          <EduCard key={edu.school} edu={edu} />
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-4">
      </p>
    </section>
  );
}
