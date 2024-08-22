import styled from 'styled-components'
import { flex } from '../../../_variableStyle'

export const PaginList = styled.ul`
  ${flex('column', '', '')}

  position: absolute;
  left: 25px;
  top: 215px;
  gap: 50px;

  z-index: 1;
`
