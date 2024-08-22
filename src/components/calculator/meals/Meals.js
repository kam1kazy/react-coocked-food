import React from 'react'

// Styles
import {
  MealRow,
  MealTime,
  MealTimeName,
  MealFoodList,
  MealFoodItem,
  MealFoodName,
  MealFoodMass,
  LoadingError,
} from './styles'

function MealItem({ array }) {
  if (!array) {
    return <LoadingError>Данных нет...</LoadingError>
  }

  const mealsName = {
    breakfast: 'Завтрак',
    lunch: 'Обед',
    dinner: 'Ужин',
    snack: 'Перекус',
    secondBreakfast: '2-ой завтрак',
    secondLunch: 'Второй обед',
    secondDinner: 'Второй ужин',
    secondSnack: 'Второй перекус',
  }

  return Object.keys(array).map((key, index) => {
    return (
      <MealRow key={index}>
        <MealTime>
          <MealTimeName>{mealsName[key]}</MealTimeName>
          {array[key].time}
        </MealTime>

        <MealFoodList>
          {Array.isArray(array[key].dishes) ? (
            array[key].dishes.map((item, index) => (
              <MealFoodItem key={index}>
                <MealFoodName>- {item.name}</MealFoodName>
                <MealFoodMass>{item.weight}</MealFoodMass>
              </MealFoodItem>
            ))
          ) : (
            <MealFoodItem>
              <MealFoodName>- {array[key].dish}</MealFoodName>
              <MealFoodMass>{array[key].weight}</MealFoodMass>
            </MealFoodItem>
          )}
        </MealFoodList>
      </MealRow>
    )
  })
}

export default MealItem
