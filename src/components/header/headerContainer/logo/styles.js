import styled from 'styled-components'
import { flex, colors, typography } from '../../../../_variableStyle'

export const LogoContainer = styled.div`
  ${flex('column', 'center', 'center')};
  margin: auto 0;
  width: 262px;
  background-color: ${colors.background};
  border-radius: 50%;
`

export const LogoImage = styled.img`
  width: 290px;
  height: 120px;
  margin-top: -15px;
  margin-right: 5px;
`

export const LogoText = styled.figcaption`
  ${typography('Comfortaa', '', '15px', '16px')}
  text-align: center;
  margin: 0;
  margin-top: -11px;
  pointer-events: none;
`
