import React from 'react'

import { ProgramsTabs, ProgramsTab } from './styles'

function ProgramsTabsComponent({
  prevData,
  selectedProgram,
  setSelectedProgram,
}) {
  const handleProgramSelect = (id) => {
    setSelectedProgram(id)
  }

  return (
    <ProgramsTabs>
      {prevData.current.map((item, index) => (
        <ProgramsTab
          key={index}
          className={selectedProgram === index + 1 ? 'selected' : ''}
          onClick={() => handleProgramSelect(index + 1)}
        >
          {item.name}
        </ProgramsTab>
      ))}
    </ProgramsTabs>
  )
}

export default ProgramsTabsComponent
