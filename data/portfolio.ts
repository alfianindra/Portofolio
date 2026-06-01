import type { Skill, Project, Education, Experience, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Beranda",    href: "#home"       },
  { label: "Tentang",   href: "#about"      },
  { label: "Keahlian",  href: "#skills"     },
  { label: "Proyek",    href: "#projects"   },
  { label: "Pendidikan",href: "#education"  },
  { label: "Pengalaman",href: "#experience" },
  { label: "Kontak",    href: "#contact"    },
];

export const tags = [
  "Data Science", "Data Engineering",
  "Data Analytics", "JavaScript", "React", "Python",
];

export const skills: Skill[] = [
  { name: "Python",       type: "Data & ML"  },
  { name: "JavaScript",   type: "Web Dev"    },
  { name: "React",        type: "Frontend"   },
  { name: "Next.js",      type: "Frontend"   },
  { name: "Node.js",      type: "Backend"    },
  { name: "PostgreSQL",   type: "Database"   },
  { name: "MongoDB",      type: "Database"   },
  { name: "Firebase",     type: "Backend"    },
  { name: "Pandas",       type: "Data"       },
  { name: "Scikit-learn", type: "ML"         },
  { name: "Tailwind CSS", type: "Frontend"   },
  { name: "HTML / CSS",   type: "Web"        },
];

export const projects: Project[] = [
  {
    title: "Credit Risk Classification",
    lang:  "Python",
    desc:  "Model machine learning untuk mengklasifikasikan risiko kredit pinjaman menggunakan dataset keuangan nyata. Meliputi preprocessing data, feature engineering, dan algoritma klasifikasi seperti Random Forest & XGBoost.",
    href:  "https://github.com/alfianindra/Credit_risk_Classification",
    image: "/projects/creditRisk.png", 
  },
  {
    title: "Poutendance",
    lang:  "Dart / Flutter",
    desc:  "Aplikasi mobile manajemen absensi mahasiswa berbasis Flutter. Fitur check-in, rekap kehadiran, dan tampilan UI yang bersih menggunakan Material Design.",
    href:  "https://github.com/alfianindra/Poutendance",
    image: "/projects/poutendance.jpg",
  },
  {
    title: "Areblog Website",
    lang:  "Node.js / EJS",
    desc:  "Platform blog full-stack dengan Node.js dan EJS. Mendukung CRUD artikel, autentikasi pengguna, dan server-side rendering untuk performa optimal.",
    href:  "https://github.com/alfianindra/Areblog-Website",
    image: "/projects/areblog.png",
  },
  {
    title: "Instodrum",
    lang:  "Dart / Flutter",
    desc:  "Aplikasi replica dari instagram.",
    href:  "https://github.com/alfianindra/Instodrum_project",
    image: "/projects/instodrum.png",
  },
];

export const educations: Education[] = [
  {
    school: "Universitas Tarumanagara",
    degree: "S1 Teknik Informatika",
    year:   "2022 – 2026",
    logo:   "/edu/untar.png", // taruh logo di /public/edu/
  },
];

export const experiences: Experience[] = [
  // Isi pengalaman kerja / magang / freelance kamu di sini
  // Contoh:
  {
    role:    "AI Engineer",
    company: "Dicoding Indonesia",
    period:  "febuary 2025 – jul 2025",
    desc:    "Membuat chatbot menggunakan microsoft azure",
    logo:    "/edu/dicoding.png",
  },
];

export const contactLinks = [
  { label: "GitHub",    href: "https://github.com/alfianindra"                              },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/alfian-indrajaya-9300b3334/"     },
  { label: "Email",     href: "mailto:alfianij8@gmail.com"                                   },
];
