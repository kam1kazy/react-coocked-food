import React from 'react'

// Components
import Slide from './slide/Slide'

// Styles
import { SliderItemList } from './styles'

function Slider({ data }) {
  return (
    // Слайдер
    <SliderItemList>
      {data.map((item, index) => (
        <Slide
          id={`slide-${item.id}`}
          key={item.id}
          slideImage={item.images.promo}
          slideTitle={item.title}
          slideDescription={item.description}
          slideButton={item.button}
          slideSale={item.sale}
        />
      ))}
    </SliderItemList>
  )
}

export default Slider
