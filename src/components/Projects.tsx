import { useId, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

import { Projects as projectsData } from '@/data/projects'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Lightbox from 'yet-another-react-lightbox'
import { Captions, Zoom, Thumbnails } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

// (Zoom has no extra CSS file in recent versions)

type MediaProps = {
  type?: 'image' | 'images' | 'video'
  image?: string
  images?: string[]
  video?: string
  alt: string
  groupId: string
  liveUrl?: string
}

function ProjectMedia({ type, image, images, video, alt, groupId }: MediaProps) {
  const mediaBase = 'relative w-full overflow-hidden rounded-xl bg-muted h-56 md:h-64'

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const imgs = images ?? []
  const isMulti = type === 'images' && imgs.length > 1

  // --- Video ---
  if (type === 'video' && video) {
    return (
      <div className={mediaBase}>
        <video
          className="h-full w-full object-cover"
          src={video}
          controls
          muted
          playsInline
        />
      </div>
    )
  }

  // --- Multiple Images (>= 2) ---
  if (isMulti) {
    const remaining = Math.max(0, imgs.length - 1)
    const slides = imgs.map((src) => ({ src, alt }))

    return (
      <div className={mediaBase}>
        {remaining > 0 && (
          <div className="pointer-events-none absolute right-2 top-2 z-20">
            <span className="rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-md">
              +{remaining}
            </span>
          </div>
        )}

        {/* Swiper navigation buttons (external elements) */}
        <button
          aria-label="Previous image"
          className={`absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60`}
          id={`${groupId}-prev`}
          type="button"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next image"
          className={`absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60`}
          id={`${groupId}-next`}
          type="button"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard]}
          navigation={{ prevEl: `#${groupId}-prev`, nextEl: `#${groupId}-next` }}
          pagination={{ el: `#${groupId}-pagination`, clickable: true }}
          keyboard={{ enabled: true }}
          a11y={{ enabled: true }}
          style={{ height: '100%' }}
        >
          {imgs.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`${alt} - ${i + 1}`}
                className="h-full w-full object-cover cursor-pointer"
                loading="lazy"
                onClick={() => {
                  setPhotoIndex(i)
                  setLightboxOpen(true)
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          id={`${groupId}-pagination`}
          className="absolute bottom-2 left-0 right-0 z-20 flex justify-center"
        />

        {/* Lightbox with navigation visible (since multiple images) */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={slides}
          plugins={[Captions, Zoom, Thumbnails]}
          carousel={{ finite: false }}
          controller={{ closeOnBackdropClick: true }}
          animation={{ fade: 300 }}
          // use default prev/next buttons
        />
      </div>
    )
  }

  // --- Single Image (or fallback to first of images) ---
  const single = image || imgs[0] || ''
  const slides = single ? [{ src: single, alt }] : []

  return (
    <div className={mediaBase}>
      {single ? (
        <img
          src={single}
          alt={alt}
          className="h-full w-full object-cover cursor-pointer"
          loading="lazy"
          onClick={() => {
            setPhotoIndex(0)
            setLightboxOpen(true)
          }}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          No image provided
        </div>
      )}

      {/* Lightbox for single image with navigation hidden */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={slides}
        plugins={[Captions, Zoom]}
        controller={{ closeOnBackdropClick: true }}
        animation={{ fade: 300 }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </div>
  )
}

export default function ProjectsSection() {
  // unique classes for the outer carousel controls
  const uid = useId().replace(/:/g, '')
  const navPrevClass = `projects-prev-${uid}`
  const navNextClass = `projects-next-${uid}`

  return (
    <section id="projects" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="md:flex items-center gap-3">
            <Badge variant="outline" className="text-primary border-primary/30">
              Featured Work
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Latest Projects</h2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              aria-label="Previous"
              variant="outline"
              size="icon"
              className={`${navPrevClass} rounded-full border-primary/40 hover:bg-primary/10`}
              type="button"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              aria-label="Next"
              variant="outline"
              size="icon"
              className={`${navNextClass} rounded-full border-primary/40 hover:bg-primary/10`}
              type="button"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Keyboard, A11y]}
          navigation={{ prevEl: `.${navPrevClass}`, nextEl: `.${navNextClass}` }}
          keyboard={{ enabled: true }}
          a11y={{ enabled: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '0.5rem' }}
        >
          {projectsData.map((project, idx) => {
            const groupId = `proj-${idx}`
            return (
              <SwiperSlide key={idx} style={{ height: 'auto' }}>
                <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-2">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        {project.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                          </p>
                        )}
                      </div>

                      {project.liveUrl && (
                        <Button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          variant="ghost"
                          size="sm"
                          className="shrink-0 hover:bg-primary/10"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0 hover:bg-primary/10"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          aria-label="Open source on GitHub"
                          title="Open source on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex h-full flex-col gap-5">
                    <ProjectMedia
                      type={project.type as MediaProps['type']}
                      image={(project as any).image}
                      images={(project as any).images}
                      video={(project as any).video}
                      alt={project.title}
                      groupId={groupId}
                      liveUrl={project.liveUrl}
                    />

                    {project.tech?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 8).map((t: string, i: number) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
