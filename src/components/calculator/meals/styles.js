import styled from 'styled-components'
import { flex, typography, colors } from '../../../_variableStyle'

export const MealRow = styled.li`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`
export const MealTime = styled.p`
  display: block;
  min-width: 340px;
  font-weight: 300;
`
export const MealTimeName = styled.span`
  ${typography('', '400', '20px', '')}

  display: block;
  margin-bottom: 5px;
`
export const MealFoodList = styled.ol`
  ${flex('column', 'center', '')}
  width: 100%;
`
export const MealFoodItem = styled.li`
  ${flex('column', 'center', 'space-between')}
  ${typography('', '300', '18px', '')}

  margin-bottom: 5px;
`
export const MealFoodName = styled.span`
  ${typography('', '300', '18px', '')}
`

export const MealFoodMass = styled.span`
  ${typography('', '300', '18px', '')}
`

export const LoadingError = styled.h3`
  ${typography('', '', '20px', '')}

  text-align: center;
  color: ${colors.primary};
`
