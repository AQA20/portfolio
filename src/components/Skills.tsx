import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 }
      ]
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS",
    "Zustand", "Redux", "veux"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frontend Proficiency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise in building modern, responsive, and performant web applications 
            using cutting-edge frontend frameworks and technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-primary bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-accent border-border/50 animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Frontend Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
