import styled from 'styled-components'
import { colors, flex, boxShadow, typography } from '../../../../_variableStyle'

export const PaginItem = styled.a`
  ${flex('column', 'center', 'center')}
  ${boxShadow(30, 0.25)}

  width: 70px;
  height: 70px;

  color: ${colors.primary};
  background: ${colors.background};

  gap: 5px;

  text-decoration: none;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    ${boxShadow(30, 0.15)}
  }

  &:focus {
    ${boxShadow(30, 0.05)}
  }
`
export const PaginIcon = styled.img``

export const PaginText = styled.span`
  ${typography('Comfortaa', '700', '20px', '27px')}
  text-align: center;
  cursor: pointer;
`
