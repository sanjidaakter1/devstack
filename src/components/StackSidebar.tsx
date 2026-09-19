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

type StackSidebarProps = {
  stack: Tech[];
  onRemove: (tech: Tech) => void;
  onRemoveAll: () => void;
};

const iconMap: Record<string, ReactNode> = {
  React: <FaReact className="h-7 w-7 text-[#61DAFB]" />,
  "Vue.js": <FaVuejs className="h-7 w-7 text-[#42B883]" />,
  Svelte: <SiSvelte className="h-7 w-7 text-[#FF3E00]" />,
  "Next.js": <SiNextdotjs className="h-7 w-7 text-black" />,
  "Node.js": <FaNodeJs className="h-7 w-7 text-[#339933]" />,
  PostgreSQL: <SiPostgresql className="h-7 w-7 text-[#4169E1]" />,
  Redis: <SiRedis className="h-7 w-7 text-[#DC382D]" />,
  JavaScript: <SiJavascript className="h-7 w-7 text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="h-7 w-7 text-[#3178C6]" />,
  Java: <FaJava className="h-7 w-7 text-[#ED8B00]" />,
  "Tailwind CSS": (
    <SiTailwindcss className="h-7 w-7 text-[#06B6D4]" />
  ),
  Docker: <FaDocker className="h-7 w-7 text-[#2496ED]" />,
};

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">

      {/* Heading */}
      <div>
        <h3 className="text-base font-bold text-slate-900 sm:text-lg">
          Your Stack
        </h3>

        <p className="mt-1 text-[10px] text-slate-300 sm:text-xs">
          {stack.length} Technology Selected
        </p>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-4 flex h-[68px] items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-[10px] text-slate-300 sm:text-xs">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-4 space-y-2">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex h-[50px] items-center justify-between rounded-lg border border-slate-200 bg-white px-2.5"
              >
                {/* Icon + Name */}
                <div className="flex min-w-0 items-center gap-2">

                  <div className="grid h-8 w-8 shrink-0 place-items-center">
                    {iconMap[tech.name] ?? (
                      <span className="text-sm font-bold text-slate-400">
                        {tech.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-bold text-slate-700 sm:text-xs">
                      {tech.name}
                    </p>

                    <p className="text-[7px] text-slate-300 sm:text-[8px]">
                      {tech.category}
                    </p>
                  </div>

                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => onRemove(tech)}
                  className="ml-2 shrink-0 text-2xl font-light leading-none text-slate-300 transition hover:text-slate-500"
                  aria-label={`Remove ${tech.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 h-8 w-full rounded-lg border border-[#FECACA] bg-white text-[10px] font-bold text-[#EF4444] transition hover:bg-red-50 sm:text-xs"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
};

export default StackSidebar;