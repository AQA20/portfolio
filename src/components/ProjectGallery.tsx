import { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import clsx from 'clsx'

type ProjectGalleryProps = {
  images: string[]
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })

    lightbox.init()

    return () => {
      lightbox.destroy()
    }
  }, [])

  return (
    <section id="gallery" className="grid grid-cols-3">
      {images.map((image, index) => {
        const isFeatured = index === 0
        const isHidden = index > 3
        const showMoreBadge = index === 3 && images.length > 4

        return (
          <a
            key={image}
            href={image}
            target="_blank"
            rel="noreferrer"
            aria-label="Open image in full screen"
            data-pswp-width="800"
            data-pswp-height="800"
            data-pswp-type="image"
            className={clsx('relative', {
              hidden: isHidden,
              'col-span-3 w-full h-[360px] overflow-hidden': isFeatured,
            })}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {showMoreBadge && (
              <div
                className="
              bg-primary rounded-md px-2 py-1 
              absolute right-3 bottom-3 
              text-white font-bold text-sm
              "
              >
                +{images.length - 3}
              </div>
            )}
          </a>
        )
      })}
    </section>
  )
}

export default ProjectGallery
