import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-secondary border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Ahmad AbuDawaba
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Passionate full-stack developer creating innovative solutions that
              make a difference.
            </p>
            <div className="flex space-x-3">
              <Button
                onClick={() =>
                  window.open('https://github.com/AQA20', '_blank')
                }
                variant="ghost"
                size="icon"
                className="hover:shadow-glow transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/ahmad-abudawaba/',
                    '_blank'
                  )
                }
                variant="ghost"
                size="icon"
                className="hover:shadow-glow transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('skills')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-foreground transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('projects')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-foreground transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Let's Connect</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to start your next project?
            </p>
            <Button
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Ahmad AbuDawaba.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-foreground"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
