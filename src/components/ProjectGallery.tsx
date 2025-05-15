import { useEffect, useState } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import clsx from 'clsx'

const ProjectGallery = ({ images }: { images: string[] }) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()
  })

  return (
    <section id="gallery" className="grid grid-cols-2 md:grid-cols-2">
      {images.map((image, index) => (
        <a
          className={clsx('relative', {'hidden': index > 5})}
          data-pswp-width="800"
          data-pswp-height="800"
          aria-label="open in full screen"
          target="_blank"
          rel="noreferrer"
          data-pswp-type="image"
          key={image}
          href={image}
        >
          <img  src={image} alt={`Preview-${image}`} />
          {index === 3 && images.length - 3 && (
            <div className="bg-primary rounded-[8px] px-1 py-1 absolute right-[3%] bottom-[5%] font-bold">
              +{images.length - 3}
            </div>
          )}
        </a>
      ))}
    </section>
  )
}

export default ProjectGallery
