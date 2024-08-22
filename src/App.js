import React from 'react'
import { GlobalStyle } from './styles'
import { Reset } from 'styled-reset'

import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Calculator from './components/calculator/Calculator'
import Gallery from './components/gallery/Gallery'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <Promo />
      <Calculator />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
