import Image from "next/image";
import type { Project } from "@/types";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition flex flex-col"
    >
      {/* Thumbnail — jika tidak ada gambar, tampilkan placeholder */}
      <div className="relative h-44 w-full bg-gray-800">
        {project.image ? (
          <Image
            src={project.image}
            fill
            alt={project.title}
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-4xl">
            📁
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <p className="text-sm font-semibold text-white">{project.title}</p>
          <span className="text-xs text-gray-500 border border-gray-700 rounded-full px-2 py-0.5 ml-2 shrink-0">
            {project.lang}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed flex-1">{project.desc}</p>
        <p className="text-xs text-blue-400 mt-4 group-hover:underline">
          Lihat di GitHub →
        </p>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Portofolio" title="Proyek yang Pernah Dibuat" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
