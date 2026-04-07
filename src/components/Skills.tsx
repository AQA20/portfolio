import { Badge } from "@/components/ui/badge";
import { FaAws } from "react-icons/fa";
import {
  siCss,
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJira,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenapiinitiative,
  siPhp,
  siPostgresql,
  siReact,
  siReactquery,
  siRedux,
  siShadcnui,
  siTailwindcss,
  siTanstack,
  siTypescript,
  siVuedotjs,
  siVuetify,
} from "simple-icons";
import type { IconType } from "react-icons";

type BrandIcon = {
  hex: string;
  path: string;
  title: string;
};

type Technology = {
  icon?: BrandIcon;
  reactIcon?: IconType;
  reactIconClassName?: string;
  name: string;
};

const technologies: Technology[] = [
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "Vue", icon: siVuedotjs },
  { name: "Vuetify", icon: siVuetify },
  { name: "JavaScript", icon: siJavascript },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Express.js", icon: siExpress },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "shadcn/ui", icon: siShadcnui },
  { name: "CSS/SCSS", icon: siCss },
  { name: "AWS", reactIcon: FaAws, reactIconClassName: "text-[#FF9900]" },
  { name: "Docker", icon: siDocker },
  { name: "Zustand", icon: siReactquery },
  { name: "Redux", icon: siRedux },
  { name: "TanStack Query", icon: siTanstack },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MySQL", icon: siMysql },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "PHP", icon: siPhp },
  { name: "Laravel", icon: siLaravel },
  { name: "Jira", icon: siJira },
  { name: "OpenAPI", icon: siOpenapiinitiative },
  { name: "HTML", icon: siHtml5 },
];

const SkillPill = ({ icon, name, reactIcon: ReactIcon, reactIconClassName }: Technology) => {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-[0_2px_10px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
      <span className="flex h-6 w-6 items-center justify-center" aria-hidden="true">
        {ReactIcon ? (
          <ReactIcon className={reactIconClassName ?? "text-slate-900"} size={20} />
        ) : icon ? (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={icon.path} fill={`#${icon.hex}`} />
          </svg>
        ) : null}
      </span>
      <span className="text-sm font-semibold tracking-tight text-slate-900">
        {name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Skills & Technologies
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Skills & Technologies
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-border/80" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {technologies.map((technology, index) => (
            <div
              key={technology.name}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <SkillPill {...technology} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
