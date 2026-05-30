import type { Skill } from "@/types";
import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/data/portfolio";

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-blue-500/40 hover:bg-gray-900/80 transition">
      <p className="text-sm font-medium text-white">{skill.name}</p>
      <p className="text-xs text-gray-500 mt-0.5">{skill.type}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Keahlian" title="Tech Stack" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <SkillCard key={s.name} skill={s} />
        ))}
      </div>
    </section>
  );
}
