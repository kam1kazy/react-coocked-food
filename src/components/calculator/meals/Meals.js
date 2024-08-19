import React from 'react'

// Styles
import {
  MealRow,
  MealTime,
  MealTimeName,
  MealFoodList,
  MealFoodItem,
  // MealFoodName,
  MealFoodMass,
  LoadingError,
} from './styles'

function MealItem({ meal }) {
  if (!meal) {
    return <LoadingError>Данных нет...</LoadingError>
  }

  return (
    <MealRow>
      <MealTime>
        <MealTimeName></MealTimeName>
        {meal.time}
      </MealTime>
      <MealFoodList>
        <MealFoodItem>
          {/* <MealFoodName>{meal.dish}</MealFoodName> */}
          <MealFoodMass>{meal.weight}</MealFoodMass>
        </MealFoodItem>
      </MealFoodList>
    </MealRow>
  )
}

export default MealItem
