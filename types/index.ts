export type Skill = {
  name: string;
  type: string;
};

export type Project = {
  title: string;
  lang: string;
  desc: string;
  href: string;
  image?: string; // optional: path ke /public/projects/xxx.png
};

export type Education = {
  school: string;
  degree: string;
  year: string;
  logo?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  desc: string;
  logo?: string;
};

export type NavItem = {
  label: string;
  href: string;
};
