import React from 'react'
import PhoneComponent from './phone/Phone.js'
import HeaderContainerComponent from './headerContainer/headerContainer.js'
import LogoComponent from './headerContainer/logo/Logo.js'
import NavigationComponent from './headerContainer/navigation/Navigation.js'

import { Container } from '../../styles'
import { Header } from './styles.js'

function HeaderComponent() {
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
            <LogoComponent />
            <NavigationComponent sections={sections} />
          </HeaderContainerComponent>
          <PhoneComponent />
        </div>
      </Container>
    </Header>
  )
}

export default HeaderComponent
