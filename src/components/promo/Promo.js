import React from 'react'
import { Slider, SliderLeft, Circle, SliderRight, CircleImage, Slide } from './styles'
import { slides } from './sliderList'
import { Container } from '../../styles'

function PromoComponent() {
  return (
    <Container>
      <Slider>
        <ul className='pagination'>
          {slides.map((slide) => (
            <li>
              <img key={slide.id} src={slide.images.icon} alt={slide.title} />
            </li>
          ))}
        </ul>

        {slides.map((slide) => (
          <Slide>
            <SliderLeft>
              <h2>{slide.title}</h2>
            </SliderLeft>
            <SliderRight>
              <Circle>
                <CircleImage src={slide.image} alt={slide.title} />
              </Circle>
            </SliderRight>
          </Slide>
        ))}
      </Slider>
    </Container>
  )
}

export default PromoComponent
