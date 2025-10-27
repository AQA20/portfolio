import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AQA20",
      username: "@AQA20"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmad-abudawaba/",
      username: "/in/ahmad-abudawaba"
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities, 
            challenging projects, and connecting with fellow developers. 
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Connect with me section */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-accent hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{social.label}</div>
                        <div className="font-medium">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <Card className="bg-gradient-accent border-border/50">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">Open to Opportunities</h4>
                <p className="text-muted-foreground text-sm">
                  Currently available for freelance projects and full-time positions. 
                  Let's discuss how I can contribute to your team's success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;