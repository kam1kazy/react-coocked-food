import styled from 'styled-components'
import { boxShadow, typography } from '../../../_variableStyle'

// Дни недели
export const WeekDays = styled.ul`
  width: 100%;
  height: 55px;
  border-radius: 30px;
  background: #f5faff;
  ${boxShadow()}
  margin-top: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const WeekDay = styled.li`
  ${typography('Comfortaa', '700', '25px', '27px')}
  text-transform: uppercase;
  margin-top: 5px;
  padding: 10px;
  cursor: pointer;

  transition: var(--transition);

  &.selected {
    color: #64d370;
  }

  &:hover {
    color: #64d370;
  }
`
