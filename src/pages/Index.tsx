import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Download } from 'lucide-react'
import ProjectsSection from '@/components/ProjectsSection'
import { Card } from '@/components/ui/card'

const Index = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'PHP',
    'Laravel',
    'React',
    'Next.js',
    'Vue',
    'Nuxt.js',
    'Nodejs',
    'MySQL',
    'GitHub',
    'AWS',
  ]

  const experiences = [
    {
      company: 'Tripsome',
      role: 'Full Stack Engineer',
      period: 'Present',
      description: 'Currently working at Tripsome as a Full Stack Engineer, specializing in Laravel, PHP, MySQL, Vue.js, Vuetify, and Tailwind CSS.',
      logo: '/hadigro_logo.jpeg',
      url: 'https://tripsome.com/',
    },
    {
      company: 'Metapic',
      role: 'Full Stack Engineer',
      period: 'Mar 2023 - Jun 2024 · 1 yr 4 mos',
      description: `Successfully integrated various third-party APIs, including Google Analytics, Awin,
        Mailchimp, and CJ, as well as payment gateways like Stripe.

        Enhanced the admin dashboard by adding new features, fixing issues, and optimizing
        the user experience for simpler usage.`,
      logo: '/metapic_logo.jpeg',
      url: 'https://metapic.com/',
    },
    {
      company: 'Logistaas',
      role: 'Frontend Developer',
      period: 'Feb 2022 - Mar 2023 · 1 yr 2 mos',
      description: `Developed and maintained interactive user interfaces using React and Vue.js, 
        ensuring responsive design and seamless user experiences. Implemented features based on client requirements, 
        integrated APIs, and optimized performance for various web applications.`,
      logo: '/logistaas_logo.jpeg',
      url: 'https://logistaas.com/',
    },
    {
      company: 'Tripsome',
      role: 'Full Stack Engineer',
      period: 'Oct 2020 - Nov 2021 · 1 yr 2 mos',
      description: `Developed and maintained various applications, including building new features and
        refactoring existing code.
        Created an analytics dashboard to display critical company data, track sales, gross
        profits, net profit, and manage admin and user permissions.`,
      logo: '/hadigro_logo.jpeg',
      url: 'https://tripsome.com/',
    },
    {
      company: 'VAV Technology ',
      role: 'Full Stack Engineer',
      period: 'May 2019 - Dec 2020 · 1 yr 8 mos',
      description: `Developed and deployed a wide range of static websites and custom CMS solutions for 
        clients using modern technologies such as JavaScript, React, TypeScript, and Node.js. 
        Designed and implemented automation scripts to streamline repetitive tasks`,
      logo: '/vav_company_logo.jpeg',
      url: 'http://www.vav.com.mk',
    },
  ]

  const scrollTo = (id: string) => {
    const projectsSection = document.querySelector(`#${id}`)
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/CV.pdf' // The path to the file in the public directory
    link.download = 'CV.pdf' // The name for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <div className="flex w-full flex-wrap md:flex-nowrap md:max-w-6xl md:space-x-6 p-6">
            <img
              src="/profile.jpeg"
              alt="Developer Setup"
              className="w-64 h-64 object-cover rounded-full mx-auto mb-8 animate-float"
            />

            <div>
              <h1 className="text-6xl font-bold mb-6 sm:text-left">
                Hi, I'm <span className="text-primary">Ahmad AbuDawaba</span>
              </h1>
              <p className="text-xl mb-8 sm:text-left">
                A passionate developer focused on creating beautiful and
                functional web applications. With expertise in modern web
                technologies, I bring ideas to life through clean code and
                intuitive design.
              </p>
              <div>
                <ul className="flex flex-wrap sm:flex-nowrap px-2 gap-3 items-center font-semibold justify-center sm:justify-start">
                  <li
                    onClick={() => scrollTo('skills')}
                    className="cursor-pointer transition-all duration-300 hover:text-primary"
                  >
                    Skills
                  </li>
                  <li
                    onClick={() => scrollTo('projects')}
                    className="cursor-pointer transition-all duration-300 hover:text-primary"
                  >
                    Projects
                  </li>
                  <li
                    onClick={() => scrollTo('experiance')}
                    className="cursor-pointer transition-all duration-300 hover:text-primary"
                  >
                    Experiance
                  </li>
                  <li>
                    <Button
                      onClick={() => scrollTo('contact')}
                      className="bg-primary hover:bg-primary/90 w-full"
                    >
                      Get in Touch
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={handleDownload}
                    >
                      <Download className="w-5 h-5" />
                      Download CV
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-10">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-full h-full bg-primary/20 rounded-full blur-xl"
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" id="skills">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="bg-primary/10 rounded-lg p-4 text-center transition-all duration-300 hover:bg-primary hover:text-white cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(155, 135, 245, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-background/30" id="experiance">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Work Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={exp.period === 'Present' ? 'md:col-span-2' : ''}
              >
                <Card className="overflow-hidden bg-background/20 backdrop-blur hover:bg-primary/5 transition-all duration-300">
                  <div className="p-6">
                    <div
                      className="flex items-center space-x-2 mb-2 cursor-pointer"
                      onClick={() => window.open(exp.url, '_blank')}
                    >
                      <img
                        className="rounded-full"
                        width={55}
                        height={55}
                        src={exp.logo}
                      />
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-lg font-semibold mb-2">{exp.role}</p>
                    <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              variant="outline"
              className="gap-2"
              id="contact"
              onClick={() => window.open('https://github.com/AQA20', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/ahmad-abudawaba/',
                  '_blank'
                )
              }
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
