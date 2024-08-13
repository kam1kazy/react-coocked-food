import React from 'react'
import { GlobalStyle } from './styles'

import HeaderComponent from './components/header/Header'
import PromoComponent from './components/promo/Promo'

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <PromoComponent />
    </>
  )
}

export default App
