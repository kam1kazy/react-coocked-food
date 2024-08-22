import React from 'react'

// Components
import PhoneComponent from './phone/Phone.js'
import HeaderContainerComponent from './headerContainer/headerContainer.js'
import LogoComponent from './headerContainer/logo/Logo.js'
import NavigationComponent from './headerContainer/navigation/Navigation.js'

// Styles
import { Container } from '../../styles'
import { Header } from './styles'

// DATA
import { data } from './_dataNav.js'

function HeaderComponent() {
  return (
    <Header>
      <Container>
        <div className='wrapper'>
          <HeaderContainerComponent>
            <LogoComponent text={'healthy ration'} />
            <NavigationComponent navList={data} />
          </HeaderContainerComponent>
          <PhoneComponent />
        </div>
      </Container>
    </Header>
  )
}

export default HeaderComponent
