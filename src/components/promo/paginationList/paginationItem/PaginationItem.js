import React from 'react'

// Styles
import { PaginItem, PaginIcon, PaginText } from './styles'

function PaginationItem({ slideIcon, link, flexDirection, imgAlt }) {
  return (
    <PaginItem href={link} style={{ flexDirection: flexDirection }}>
      {Array.isArray(slideIcon) ? (
        slideIcon.map((icon, index) =>
          /\.\//.test(icon) ? (
            <figure key={index}>
              <picture>
                <PaginIcon src={icon} alt={imgAlt} />
              </picture>
            </figure>
          ) : (
            <PaginText>{slideIcon}</PaginText>
          )
        )
      ) : /\.\//.test(slideIcon) ? (
        <figure>
          <picture>
            <PaginIcon src={slideIcon} alt={imgAlt} />
          </picture>
        </figure>
      ) : (
        <PaginText>{slideIcon}</PaginText>
      )}
    </PaginItem>
  )
}

export default PaginationItem
