import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";

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

type TechnologiesProps = {
  technologies: Tech[];
  stack: Tech[];
  onAdd: (tech: Tech) => void;
  onRemove: (tech: Tech) => void;
  onRemoveAll: () => void;
};

const Technologies = ({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologiesProps) => {
  return (
    <section
      id="technologies"
      className="border-b border-slate-100 bg-white py-8"
    >
      <div className="section-container">

        {/* Heading */}
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Explore{" "}
            <span className="gradient-text">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards + Sidebar */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_270px] lg:items-start">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some(
                  (item) => item.id === tech.id
                )}
                onAdd={onAdd}
              />
            ))}
          </div>

          {/* Your Stack */}
          <StackSidebar
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />

        </div>

      </div>
    </section>
  );
};

export default Technologies;