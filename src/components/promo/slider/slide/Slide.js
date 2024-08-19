import React from 'react'

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
  return (
    <SlideItem id={id}>
      <SlideLeft>
        {/* Тут текст слайдера */}
        <Container>
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
        </Container>
      </SlideLeft>
      {/* Большой зеленый круг */}
      <SlideRight>
        <Circle>
          <CircleImage src={slideImage} alt={removeLastChar(slideSale.name)} />
        </Circle>
      </SlideRight>
    </SlideItem>
  )
}

export default SlideComponent
