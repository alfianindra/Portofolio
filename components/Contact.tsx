import SectionHeader from "@/components/SectionHeader";
import { contactLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader eyebrow="Kontak" title="Mari Terhubung" center />

      <p className="text-center text-gray-400 max-w-md mx-auto mb-10">
        Saya terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar diskusi seputar
        data dan teknologi.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white border border-gray-800 hover:border-blue-500/50 rounded-xl px-5 py-3 transition"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Email langsung */}
      <p className="text-center text-gray-600 text-sm mt-8">
        Atau email langsung ke{" "}
        <a
          href="mailto:alfianij8@gmail.com"
          className="text-blue-400 hover:underline"
        >
          alfianij8@gmail.com
        </a>
      </p>
    </section>
  );
}
