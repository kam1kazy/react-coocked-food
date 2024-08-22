import styled from 'styled-components'
import { boxShadow, colors, typography, flex } from '../../../_variableStyle'

// Табы
export const ProgramsTabs = styled.div`
  ${flex('row', 'center', 'space-between')}
  gap: 20px;
`

export const ProgramsTab = styled.a`
  ${flex('row', 'center', 'center')}
  ${boxShadow()}
  ${typography('Comfortaa', '700', '25px', '27px')}

  width: 580px;
  height: 62px;
  background: ${colors.secondary};
  border-radius: var(--borderRadius);

  color: ${colors.black};
  text-decoration: none;

  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    ${boxShadow(30, 0.2)}
  }

  &.selected {
    background-color: ${colors.brand};
    font-weight: ${typography.weight('700')};
    color: ${colors.white};
  }
`
