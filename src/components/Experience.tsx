'use client'

import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Tripsome',
    role: 'Full Stack Engineer',
    period: 'Present',
    description:
      'Currently working at Tripsome as a Full Stack Engineer, specializing in Laravel, PHP, MySQL, Vue.js, Vuetify, and Tailwind CSS.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Vuetify', 'Tailwind CSS'],
    image: '/hadigro_logo.jpeg',
    url: 'https://tripsome.az/en',
  },
  {
    company: 'Metapic',
    role: 'Full Stack Engineer',
    period: 'Mar 2023 - Jun 2024 · 1 yr 4 mos',
    description:
      'Integrated Google Analytics, Awin, Mailchimp, CJ, and Stripe. Enhanced the admin dashboard with new features, UX improvements, and performance optimizations.',
    tech: ['Laravel', 'Stripe', 'Mailchimp', 'Vue.js', 'Analytics'],
    image: '/metapic_logo.jpeg',
    url: 'https://metapic.com/',
  },
  {
    company: 'Logistaas',
    role: 'Frontend Developer',
    period: 'Feb 2022 - Mar 2023 · 1 yr 2 mos',
    description:
      'Developed and maintained responsive UIs using React and Vue.js, implementing features, API integrations, and performance tuning.',
    tech: ['React', 'Vue.js', 'Tailwind CSS'],
    image: '/logistaas_logo.jpeg',
    url: 'https://logistaas.com/',
  },
  {
    company: 'Tripsome',
    role: 'Full Stack Engineer',
    period: 'Oct 2020 - Nov 2021 · 1 yr 2 mos',
    description:
      'Built and refactored multiple applications. Developed an analytics dashboard to track sales, profits, and user permissions.',
    tech: ['Laravel', 'MySQL', 'Vue.js'],
    image: '/hadigro_logo.jpeg',
    url: 'https://tripsome.az/en',
  },
  {
    company: 'VAV Technology',
    role: 'Full Stack Engineer',
    period: 'May 2019 - Dec 2020 · 1 yr 8 mos',
    description:
      'Created static websites and CMS solutions using JavaScript, React, TypeScript, and Node.js. Automated workflows with custom scripts.',
    tech: ['React', 'TypeScript', 'Node.js', 'JavaScript'],
    image: '/vav_company_logo.jpeg',
    url: 'https://www.vav.com.mk/',
  },
]

function CompanyAvatar({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    // Fallback circle with initial
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
        {alt.charAt(0)}
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className="h-12 w-12 rounded-full object-cover ring-1 ring-border/50"
      decoding="async"
    />
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l border-muted-foreground/20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="relative pl-10 pb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 h-3 w-3 -translate-x-[7px] rounded-full bg-primary shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />

              {/* Clickable card wrapper */}
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${exp.company} in new tab`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl"
              >
                <div className="bg-card/40 backdrop-blur border border-border/50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-3">
                    {/* Left: avatar + name/role */}
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <CompanyAvatar src={exp.image} alt={exp.company} />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-foreground truncate">
                            {exp.company}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-primary font-medium">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Right: period */}
                    <span className="flex shrink-0 items-center text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" /> {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech pills */}
                  {exp.tech?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
