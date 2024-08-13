import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #F5FAFF;
  }

  
  ul {
    margin: 0;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 100%;

  @media (min-width: 480px) {
    width: 320px;
  }

  @media (min-width: 576px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 576px;
  }

  @media (min-width: 992px) {
    width: 768px;
    padding: 20px;
  }

  @media (min-width: 1180px) {
    width: 1180px;
    padding: 30px;
  }
`
