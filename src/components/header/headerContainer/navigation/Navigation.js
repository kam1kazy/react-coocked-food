import React from 'react'
import { useState, useEffect } from 'react'

import { NavigationItem, NavigationList } from './styles.js'

function NavigationComponent({ sections }) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const activeSectionId = sections.find(
        (section) => section.id === window.pageYOffset
      )?.id
      setActiveSection(activeSectionId)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <NavigationList>
      {sections.map((section) => (
        <NavigationItem
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={activeSection === section.id ? 'active' : ''}
        >
          {section.title}
        </NavigationItem>
      ))}
    </NavigationList>
  )
}

export default NavigationComponent
