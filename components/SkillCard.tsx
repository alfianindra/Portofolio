import { text } from "stream/consumers";

export default function SkillCards(
  titleText: string, 
  skill: string, 
  descriptionText: string, 
  color: string
) {
  const colorMap: { [key: string]: string } = {
    grey: "text-slate-400",
    red: "text-red-500",
    black: "text-zinc-900",
    blue: "text-blue-400"
  };

  const textColor = colorMap[color] || "text-slate-100";

  return (
    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50 hover:border-blue-800 transition-colors group">
      <span className={`inline-block text-xs font-semibold tracking-wider ${textColor} bg-blue-950 px-3 py-1 rounded-full mb-4 group-hover:bg-blue-900 group-hover:text-blue-200 transition-colors`}>
        {titleText}
      </span>
      <h3 className="text-lg font-bold text-slate-100 mb-2">{skill}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {descriptionText}
      </p>
    </div>
  );
}