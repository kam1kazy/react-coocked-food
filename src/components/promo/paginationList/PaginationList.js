import React from 'react'

// Components
import PaginationItem from './paginationItem/PaginationItem'

// Utils
import removeLastChar from '../../../handlers/removeLastChar'

// Styles
import { PaginList } from './styles'

function PaginationListComponent({ data }) {
  return (
    <PaginList>
      {data.map((item) => (
        <li key={item.id}>
          <PaginationItem
            link={`#slide-${item.id}`}
            slideIcon={item.images.icon}
            flexDirection={item?.flexDirection}
            imgAlt={removeLastChar(item.sale.name)}
          />
        </li>
      ))}
    </PaginList>
  )
}

export default PaginationListComponent
