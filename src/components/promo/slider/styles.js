import styled from 'styled-components'

export const SliderItemList = styled.ul`
  position: relative;
  width: 100%;

  &:not(:has(:target)) > :nth-child(4) {
    opacity: 1;
  }
`
