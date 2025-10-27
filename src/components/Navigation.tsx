import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
            Ahmad AbuDawaba
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;