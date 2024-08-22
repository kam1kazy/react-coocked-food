import React from 'react'

import { WeekDays, WeekDay } from './styles'

function WeekDaysComponent({
  prevData,
  selectedProgram,
  setSelectedWeekDay,
  selectedMode,
  selectedWeekDay,
}) {
  const handleWeekDaySelect = (day) => {
    setSelectedWeekDay(day)
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

  return (
    <WeekDays>
      {prevData.current[selectedProgram - 1].plans[selectedMode - 1].days.map(
        (item) => {
          return (
            <WeekDay
              key={item.id}
              className={item.id === selectedWeekDay ? 'selected' : ''}
              onClick={() => handleWeekDaySelect(item.id)}
            >
              {weekDaysList[item.id] && weekDaysList[item.id].shortName}
            </WeekDay>
          )
        }
      )}
    </WeekDays>
  )
}

export default WeekDaysComponent
