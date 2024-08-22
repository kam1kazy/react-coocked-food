import React, { useRef, useEffect } from 'react'

// Styles
import {
  SlidePrice,
  SlideItem,
  SlideOrder,
  SlideButton,
  SlideLeft,
  SlideRight,
  Circle,
  CircleImage,
  SlideHeader,
  SlideDescription,
} from './styles'
import { Container } from '../../../../styles'

// Utils
import removeLastChar from '../../../../handlers/removeLastChar'

function SlideComponent({
  id,
  slideTitle,
  slideDescription,
  slideImage,
  slideButton,
  slideSale,
}) {
  const slideLeftRef = useRef(null)
  const slideRightRef = useRef(null)

  // Большой зеленый шар, всегда чуть правее от текста
  useEffect(() => {
    if (slideLeftRef.current && slideRightRef.current) {
      const slideLeftWidth = slideLeftRef.current.offsetWidth

      const slideRightLeftOffset = slideLeftWidth + 140

      slideRightRef.current.style.left = `${slideRightLeftOffset}px`
    }
  }, [slideLeftRef, slideRightRef])

  return (
    <SlideItem id={id}>
      {/* Тут текст слайдера */}

      <SlideLeft>
        <Container>
          <div ref={slideLeftRef} className='wrapper'>
            {/* Передаю в формате html */}
            <SlideHeader dangerouslySetInnerHTML={{ __html: slideTitle }} />
            <SlideDescription
              dangerouslySetInnerHTML={{ __html: slideDescription }}
            />

            {/* Кнопка с ценой */}
            <SlideOrder>
              <SlideButton
                dangerouslySetInnerHTML={{ __html: slideButton.text }}
              />

              <SlidePrice>
                {slideSale.name}
                <span>{slideSale.price}</span>
              </SlidePrice>
            </SlideOrder>
          </div>
        </Container>
      </SlideLeft>

      {/* Большой зеленый круг */}
      <SlideRight
        ref={slideRightRef}
        left={
          slideRightRef.current ? slideRightRef.current.offsetLeft : '690px'
        }
      >
        <Circle>
          <figure>
            <picture>
              <CircleImage
                src={slideImage}
                alt={removeLastChar(slideSale.name)}
                loading='lazy'
              />
            </picture>
          </figure>
        </Circle>
      </SlideRight>
    </SlideItem>
  )
}

export default SlideComponent
