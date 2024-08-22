import React from 'react'
import { useState, useEffect } from 'react'

import { NavigationItem, NavigationList } from './styles'

function NavigationComponent({ navList }) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const activeSectionId = navList.find(
        (section) => section.id === window.pageYOffset
      )?.id
      setActiveSection(activeSectionId)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navList])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <NavigationList>
      {navList.map((section) => (
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
