import type { ReactNode } from "react";

import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaJava,
} from "react-icons/fa";

import {
  SiSvelte,
  SiNextdotjs,
  SiRedis,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

type Tech = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechCardProps = {
  tech: Tech;
  isAdded: boolean;
  onAdd: (tech: Tech) => void;
};

const iconMap: Record<string, ReactNode> = {
  React: <FaReact className="h-5 w-5 text-[#61DAFB]" />,
  "Vue.js": <FaVuejs className="h-5 w-5 text-[#42B883]" />,
  Svelte: <SiSvelte className="h-5 w-5 text-[#FF3E00]" />,
  "Next.js": <SiNextdotjs className="h-5 w-5 text-black" />,
  "Node.js": <FaNodeJs className="h-5 w-5 text-[#339933]" />,
  PostgreSQL: <SiPostgresql className="h-5 w-5 text-[#4169E1]" />,
  Redis: <SiRedis className="h-5 w-5 text-[#DC382D]" />,
  JavaScript: <SiJavascript className="h-5 w-5 text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="h-5 w-5 text-[#3178C6]" />,
  Java: <FaJava className="h-5 w-5 text-[#ED8B00]" />,
  "Tailwind CSS": (
    <SiTailwindcss className="h-5 w-5 text-[#06B6D4]" />
  ),
  Docker: <FaDocker className="h-5 w-5 text-[#2496ED]" />,
};

const badgeColors: Record<string, string> = {
  Popular: "bg-[#FCE7F3] text-[#DB2777]",
  Versatile: "bg-[#D1FAE5] text-[#059669]",
  Fast: "bg-[#FFEDD5] text-[#EA580C]",
  Standard: "bg-[#D1FAE5] text-[#059669]",
  Essential: "bg-[#E0F2FE] text-[#0284C7]",
  "Top SQL": "bg-[#DBEAFE] text-[#2563EB]",
  Ubiquitous: "bg-[#FEF3C7] text-[#D97706]",
  Modern: "bg-[#CFFAFE] text-[#0891B2]",
  Containers: "bg-[#E0F2FE] text-[#0284C7]",
  Cache: "bg-[#FEE2E2] text-[#DC2626]",
  Robust: "bg-[#EDE9FE] text-[#7C3AED]",
};

const TechCard = ({
  tech,
  isAdded,
  onAdd,
}: TechCardProps) => {
  return (
    <div className="tech-card min-w-0 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:rounded-2xl sm:p-4">

      {/* Top */}
      <div className="flex items-start justify-between gap-1.5">

        {/* Icon + Name */}
        <div className="flex min-w-0 items-center gap-2">

          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-50 sm:h-11 sm:w-11">
            {iconMap[tech.name] ?? (
              <span className="text-xs font-bold text-slate-400">
                {tech.name.charAt(0)}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[11px] font-bold text-slate-900 sm:text-sm">
              {tech.name}
            </h3>
          </div>

        </div>

        {/* Badge */}
        {tech.badge && (
          <span
            className={`shrink-0 rounded-full px-1.5 py-0.5 text-[7px] font-bold sm:px-2 sm:py-1 sm:text-[10px] ${
              badgeColors[tech.badge] ||
              "bg-slate-100 text-slate-500"
            }`}
          >
            {tech.badge}
          </span>
        )}

      </div>

      {/* Description */}
      <p className="mt-2.5 min-h-[48px] text-[7px] leading-3.5 text-slate-500 sm:mt-4 sm:min-h-[60px] sm:text-xs sm:leading-5">
        {tech.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mt-2 flex items-center justify-between gap-1.5 border-t border-slate-100 pt-2 text-[7px] sm:mt-4 sm:pt-3 sm:text-xs">

        {/* Category */}
        <span className="shrink-0 rounded-full bg-slate-100 px-1.5 py-0.5 text-slate-500 sm:px-2 sm:py-1">
          {tech.category}
        </span>

        {/* Difficulty */}
        <span className="truncate text-slate-500">
          {tech.difficulty}
        </span>

        {/* Rating */}
        <span className="shrink-0 font-bold text-slate-700">
          ⭐ {tech.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-2 w-full rounded-md py-1.5 text-[8px] font-bold transition sm:mt-4 sm:rounded-lg sm:py-2.5 sm:text-xs ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechCard;