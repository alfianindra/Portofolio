// Dipakai ulang di setiap section agar label + judul konsisten.
// Contoh penggunaan:
//   <SectionHeader eyebrow="Tentang" title="Siapa Saya?" />

type Props = {
  eyebrow: string;
  title: string;
  center?: boolean;
};

export default function SectionHeader({ eyebrow, title, center = false }: Props) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}
