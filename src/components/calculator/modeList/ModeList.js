import React from 'react'

import { ModeList, ModeItem, ModeItemName } from './styles'

function ModeListComponent({
  prevData,
  selectedProgram,
  selectedMode,
  setSelectedMode,
}) {
  const handleModeSelect = (id) => {
    setSelectedMode(id)
  }

  return (
    <ModeList>
      {prevData.current[selectedProgram - 1].plans.map((item) => {
        return (
          <ModeItem
            key={item.id}
            className={item.id === selectedMode ? 'selected' : ''}
            onClick={() => handleModeSelect(item.id)}
          >
            <ModeItemName>{item.name}</ModeItemName>
            {item.sumСal}
          </ModeItem>
        )
      })}
    </ModeList>
  )
}

export default ModeListComponent
