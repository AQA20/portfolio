import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  githubUrl: string
  liveUrl: string
}

const projects: Project[] = [
  {
    title: 'Blog',
    description: 'A blog website',
    tech: ['Next.js', 'React', 'JavaScript', 'Tailwind',],
    image: '/500kalima.png',
    githubUrl: 'https://github.com/AQA20/500kalima',
    liveUrl: 'https://500kalima.com',
  },
  {
    title: 'Blog CMS',
    description: 'A blog content management system',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Shadcn'],
    image: '/500kalima-cms.png',
    githubUrl: 'https://github.com/AQA20/blog-cms',
    liveUrl: 'https://manage.500kalima.com',
  },
  {
    title: 'Blog API',
    description: 'Node.js and Express.js RESTful API for a blog',
    tech: ['Node.js', 'Express.js', 'AWS', 'MySql', 'Sequelize'],
    image: '/node-api.png',
    githubUrl: 'https://github.com/AQA20/blog-api',
    liveUrl: '#',
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Latest Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-background/20 backdrop-blur">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto sm:h-[550px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-primary/20 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </Button>
                    <Button
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
