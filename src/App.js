import React from 'react'
import { GlobalStyle } from './styles'

import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Calculator from './components/calculator/Calculator'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Promo />
      <Calculator />
    </>
  )
}

export default App
