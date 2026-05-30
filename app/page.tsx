import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import About      from "@/components/About";
import Skills     from "@/components/Skills";
import Projects   from "@/components/Projects";
import Education  from "@/components/Education";
import Experience from "@/components/Experience";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";
import Divider    from "@/components/Divider";

// page.tsx hanya bertugas menyusun layout — tidak ada logika di sini.
// Semua komponen adalah Server Components kecuali Navbar ("use client").
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
