import React from 'react'

// Data
import { data } from './dataGallery'

// Styles
import {
  GalleryArea,
  GalleryHeader,
  GalleryCarousel,
  GalleryCarouselItem,
} from './styles'

function Gallery() {
  return (
    <GalleryArea>
      <GalleryHeader>Фото блюд</GalleryHeader>
      <GalleryCarousel>
        {data.map((item) => (
          <GalleryCarouselItem key={item.id}>
            <figure>
              <picture>
                <img src={item.src} alt={item.alt} loading='lazy' />
              </picture>
            </figure>
          </GalleryCarouselItem>
        ))}
      </GalleryCarousel>
    </GalleryArea>
  )
}

export default Gallery
