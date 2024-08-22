import React, { useState, useEffect, useRef } from 'react'

// Data
import { data } from './_dataDiets'

// Components
import MealItem from './meals/Meals'
import WeekDaysComponent from './weekDays/WeekDays'
import ModeListComponent from './modeList/ModeList'
import ProgramsTabsComponent from './programsTabs/ProgramsTabs'

// Styles
import { Meals, Calculator } from './styles'
import { Container } from '../../styles'

function CalculatorComponent() {
  const [selectedProgram, setSelectedProgram] = useState(1)
  const [selectedMode, setSelectedMode] = useState(1)
  const [selectedWeekDay, setSelectedWeekDay] = useState(1)
  const [currentData, setCurrentData] = useState([])
  const [mealSettings, setMealSettings] = useState([])

  const prevData = useRef(data)

  useEffect(() => {
    if (prevData.current !== data) {
      setCurrentData(data)
      prevData.current = data
    }
  }, [])

  // Рендер плана на день
  const renderMeals = () => {
    const dayList =
      prevData.current[selectedProgram - 1].plans[selectedMode - 1].days[
        selectedWeekDay
      ].meals

    return dayList.map((item, index) => {
      return <MealItem key={index} array={item} />
    })
  }

  return (
    <Calculator>
      <Container>
        {/* Планы питания */}
        <ProgramsTabsComponent
          prevData={prevData}
          selectedProgram={selectedProgram}
          setSelectedProgram={setSelectedProgram}
        />

        {/* Готовые сеты */}
        <ModeListComponent
          prevData={prevData}
          selectedMode={selectedMode}
          selectedProgram={selectedProgram}
          selectedModeList={mealSettings}
          setSelectedMode={setSelectedMode}
        />

        {/* Дни недели */}
        <WeekDaysComponent
          prevData={prevData}
          setSelectedWeekDay={setSelectedWeekDay}
          selectedWeekDay={selectedWeekDay}
          selectedProgram={selectedProgram}
          selectedMode={selectedMode}
        />

        {/* Расписание на день */}
        <Meals>{renderMeals()}</Meals>
      </Container>
    </Calculator>
  )
}

export default CalculatorComponent
