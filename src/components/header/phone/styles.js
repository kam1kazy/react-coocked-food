import styled from 'styled-components'
import { flex, boxShadow, colors } from '../../../_variableStyle'

export const NumberButton = styled.a`
  ${flex('row', 'center', 'center')}
  ${boxShadow()}

  width: 280px;
  height: 52px;

  background-color: ${colors.background};
  border-radius: var(--borderRadius);
  transition: var(--transition);

  &:hover {
    color: ${colors.primary};
  }
`
