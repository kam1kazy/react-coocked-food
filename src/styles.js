import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #F5FAFF;
    overflow-x: hidden;
    
    scroll-timeline: --the-scroller;
  }
  nav {
    font-family: 'Montserrat', sans-serif; /* add this line */
  }

  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .color-{
    &brand {
      color: #64d370;
    }

    &orange {
      color: #d38f64;
    }
    
    &blue {
      color: #64c2d3;
    }

    &red {
      color: #d36494;
    }

    &yellow {
      color: #d3c864;
    }

    &pink {
      color: #cd64d3;
    }
  }

  p {
    padding: 0;
  }

  a {
    cursor: pointer;
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
