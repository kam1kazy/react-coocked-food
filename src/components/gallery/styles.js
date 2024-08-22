import styled from 'styled-components'
import { typography } from '../../_variableStyle'

// Список питания на день
export const GalleryArea = styled.div``

export const GalleryHeader = styled.h2`
  ${typography('Comfortaa', '700', '30px', '')}

  margin-top: 165px;
  text-align: center;
`

export const GalleryCarousel = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  margin-top: 60px;

  overflow-x: scroll;
  overscroll-behavior-x: none;
  overscroll-behavior-y: auto;

  scroll-snap-type: x;
  scroll-padding-inline: 20px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

export const GalleryCarouselItem = styled.li`
  width: 380px;
  height: 615px;
  scroll-snap-align: start;
`
