'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

// Optional: pass a prop with your name if you want
// export default function Navigation({ name = 'Ahmad AbuDawaba' }: { name?: string }) {
//   ...
// }

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const prefersReducedMotion = useReducedMotion()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState<string>('about')
  const [elevated, setElevated] = useState(false)
  const [progress, setProgress] = useState(0)

  const observers = useRef<Record<string, IntersectionObserver | null>>({})

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 80 // offset for navbar height
    window.scrollTo({ top: y, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 4)
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop
      const height =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight
      const p = height ? (winScroll / height) * 100 : 0
      setProgress(p)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      observers.current[id]?.disconnect()
      observers.current[id] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id)
          })
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
      )
      observers.current[id]?.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      Object.values(observers.current).forEach((ob) => ob?.disconnect())
    }
  }, [])

  const Brand = useMemo(
    () => (
      <div className="relative inline-flex items-center">
        <span className="text-xl font-semibold bg-gradient-to-r from-primary via-fuchsia-500 to-amber-400 bg-clip-text text-transparent tracking-tight">
          Ahmad AbuDawaba
        </span>
        {/* shimmer underline */}
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    ),
    []
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${
      elevated ? 'bg-background/80 backdrop-blur-xl border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.05)]' : 'bg-transparent border-transparent'
    }`}
    >
      {/* Top scroll progress bar */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-primary via-fuchsia-500 to-amber-400"
        style={{ scaleX: progress / 100, transformOrigin: '0% 50%' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {Brand}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`relative px-2 py-1 text-sm transition-colors ${
                      active === id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-current={active === id ? 'page' : undefined}
                  >
                    <span className="relative">
                      {label}
                      {/* Active underline */}
                      <AnimatePresence initial={false}>
                        {active === id && (
                          <motion.span
                            layoutId="active-underline"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />)
                        }
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="md:hidden py-4 border-t border-border"
            >
              <ul className="space-y-2">
                {SECTIONS.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left px-2 py-2 rounded-lg transition-colors ${
                        active === id
                          ? 'bg-primary/10 text-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      aria-current={active === id ? 'page' : undefined}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
