import styled from 'styled-components'
import { colors, typography, flex } from '../../../_variableStyle'

// Планы
export const ModeList = styled.ul`
  ${flex('row', 'center', 'space-between')}
  ${typography('Comfortaa', '', '14px', '20px')}
  margin-top: 70px;
`

export const ModeItem = styled.li`
  ${typography('', '', '17px', '17px')}
  text-align: center;
  transition: var(--transition);
  cursor: pointer;

  &.selected,
  &:hover {
    color: ${colors.brand};
  }
`

export const ModeItemName = styled.span`
  ${typography('', '700', '17px', '')}

  display: block;
  text-transform: uppercase;
  margin-bottom: 5px;
`
