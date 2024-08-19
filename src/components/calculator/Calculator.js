import React, { useState } from 'react'

// Data
import { data } from './dataDiets'

// Components
import MealItem from './meals/Meals'

// Styles
import {
  ProgramsTabs,
  ProgramsTab,
  ModeList,
  ModeItem,
  WeekDays,
  WeekDay,
  ModeItemName,
  Meals,
} from './styles'
import { Container } from '../../styles'

function Calculator() {
  const [selectedProgram, setSelectedProgram] = useState(1)
  const [selectedMode, setSelectedMode] = useState(1)
  const [selectedWeekDay, setSelectedWeekDay] = useState('Понедельник')
  const [currentData, setCurrentData] = useState(data)

  const handleProgramSelect = (id) => {
    setSelectedProgram(id)
  }

  const handleModeSelect = (id) => {
    setSelectedMode(id)
  }

  const handleWeekDaySelect = (fullName) => {
    setSelectedWeekDay(fullName)
  }

  const weekDaysList = {
    1: { fullName: 'Понедельник', shortName: 'Пн' },
    2: { fullName: 'Вторник', shortName: 'Вт' },
    3: { fullName: 'Среда', shortName: 'Ср' },
    4: { fullName: 'Четверг', shortName: 'Чт' },
    5: { fullName: 'Пятница', shortName: 'Пт' },
    6: { fullName: 'Суббота', shortName: 'Сб' },
    7: { fullName: 'Воскресенье', shortName: 'Вс' },
  }

  // const mealSettings =
  //   data[selectedProgram - 1]
  //   .plans[selectedMode - 1]
  //   .days.find((day) => day.day === selectedWeekDay)
  //   .meals

  // mealSettings.forEach((meal, index) => {})

  const mealSettings = currentData.plans.days.find(
    (day) => day.day === selectedWeekDay
  ).meals

  return (
    <Container>
      <ProgramsTabs>
        {currentData.map((item) => (
          <ProgramsTab
            key={item.id}
            className={item.id === selectedProgram ? 'selected' : ''}
            onClick={() => handleProgramSelect(item.id)}
          >
            {item.name}
          </ProgramsTab>
        ))}
      </ProgramsTabs>

      <ModeList>
        {currentData[selectedProgram].plans.map((item, index) => (
          <ModeItem
            key={item.id}
            className={item.id === selectedMode ? 'selected' : ''}
            onClick={() => handleModeSelect(item.id)}
          >
            <ModeItemName>{item.name}</ModeItemName>
            {item.sumСal}
          </ModeItem>
        ))}
      </ModeList>

      <WeekDays>
        {Object.values(weekDaysList).map((item) => (
          <WeekDay
            key={item.fullName}
            className={item.fullName === selectedWeekDay ? 'selected' : ''}
            onClick={() => handleWeekDaySelect(item.fullName)}
          >
            {item.shortName}
          </WeekDay>
        ))}
      </WeekDays>

      <Meals>
        {mealSettings.map((meal, index) => (
          <MealItem
            key={index}
            time={meal.time}
            dishes={meal.dishes}
            weight={meal.weight}
          />
        ))}
      </Meals>
    </Container>
  )
}

export default Calculator
