import React, { useRef, useEffect } from 'react'
import PhoneComponent from './phone/Phone.js'
import HeaderContainerComponent from './headerContainer/headerContainer.js'
import LogoComponent from './headerContainer/logo/Logo.js'
import NavigationComponent from './headerContainer/navigation/Navigation.js'

import { Container } from '../../styles'
import { Header } from './styles.js'

function HeaderComponent() {
  const scrollRef = useRef(null)
  const scrollPosition = window.scrollY

  useEffect(() => {
    if (scrollRef.current) {
      if (scrollPosition > 150) {
        scrollRef.current.style.transform = 'scale(0.5)'
        scrollRef.current.style.left = '-40px'
      } else {
        scrollRef.current.style.transform = ''
        scrollRef.current.style.left = ''
      }
    }
  }, [scrollPosition])

  const sections = [
    { id: 'programs', title: 'Программы питания' },
    { id: 'business-lanches', title: 'Бизнес-ланчи' },
    { id: 'gastro-shop', title: 'Gastro Shop' },
    { id: 'about', title: 'О нас' },
    { id: 'blog', title: 'Блог' },
  ]

  return (
    <Header>
      <Container>
        <div className='wrapper'>
          <HeaderContainerComponent>
            <LogoComponent ref={scrollRef} />
            <NavigationComponent sections={sections} />
          </HeaderContainerComponent>
          <PhoneComponent />
        </div>
      </Container>
    </Header>
  )
}

export default HeaderComponent
