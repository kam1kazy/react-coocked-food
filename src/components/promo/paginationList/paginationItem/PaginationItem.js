import React from 'react'

// Styles
import { PaginItem, PaginIcon, PaginText } from './styles'

function PaginationItem({ slideIcon, link, flexDirection, imgAlt }) {
  return (
    <PaginItem href={link} style={{ flexDirection: flexDirection }}>
      {Array.isArray(slideIcon) ? (
        slideIcon.map((icon, index) =>
          /\.\//.test(icon) ? (
            <PaginIcon key={index} src={icon} alt={imgAlt} />
          ) : (
            <PaginText>{slideIcon}</PaginText>
          )
        )
      ) : /\.\//.test(slideIcon) ? (
        <PaginIcon src={slideIcon} alt={imgAlt} />
      ) : (
        <PaginText>{slideIcon}</PaginText>
      )}
    </PaginItem>
  )
}

export default PaginationItem
