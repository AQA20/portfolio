import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "5+ years of experience building scalable applications with modern technologies"
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Passionate about finding innovative solutions to complex challenges"
    },
    {
      icon: Rocket,
      title: "Performance Focused",
      description: "Committed to delivering high-performance applications that scale"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Strong team player with excellent communication and leadership skills"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Building End-to-End Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a full stack developer with a strong product mindset, a keen eye for design,
            and a focus on clean, efficient code. I build modern web applications from the
            interface layer to the API and database, balancing user experience, performance,
            and maintainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in software development began with a curiosity about how things work 
                behind the scenes. What started as a hobby quickly became a passion, leading me 
                to pursue a career where I could combine creativity with technical expertise.
              </p>
              <p>
                Over the years, I've had the privilege of working with amazing teams on diverse 
                projects, from startup MVPs to enterprise-scale applications. Each project has 
                taught me something new and reinforced my belief that great software is built 
                through collaboration, attention to detail, and continuous learning.
              </p>
            </div>
          </div>

          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-6">What I Bring</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">User-Centric Approach</h4>
                <p className="text-muted-foreground text-sm">
                  Focus on creating intuitive experiences that users love and businesses value
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Continuous Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Always exploring new technologies and methodologies to stay ahead of the curve
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Quality Focus</h4>
                <p className="text-muted-foreground text-sm">
                  Commitment to writing clean, maintainable code with comprehensive testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;