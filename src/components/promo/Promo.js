import React from 'react'

// Data
import { data } from './dataSlides'

// Components
import PaginationList from './paginationList/PaginationList'
import Slider from './slider/Slider'

// Styles
import { PromoArea } from './styles'

function Promo() {
  return (
    <PromoArea>
      {/* Пагинация по слайдам */}
      <PaginationList data={data} />

      {/* Слайдер */}
      <Slider data={data} />
    </PromoArea>
  )
}

export default Promo
