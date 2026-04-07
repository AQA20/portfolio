import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import heroVideo from '@/assets/hero-background.mp4'
import profilePhoto from '@/assets/profile-photo.jpg'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      <div className="absolute inset-0 bg-gradient-accent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">Full Stack</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Full stack developer building fast, scalable web applications
                with polished user interfaces, reliable backend systems, and
                practical solutions to real-world problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/CV.pdf'
                  link.download = 'CV.pdf'
                  link.click()
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <Button
                onClick={() =>
                  window.open('https://github.com/AQA20', '_blank')
                }
                variant="ghost"
                size="icon"
                className="hover:shadow-glow transition-all duration-300"
              >
                <Github className="h-5 w-5" />
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
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant animate-float">
                <img
                  src={profilePhoto}
                  alt="Professional Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection('about')}
          className="rounded-full"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

export default Hero
