import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { colors, typography, device, sizeContainer } from './_variableStyle'

// global style
export const GlobalStyle = createGlobalStyle`
  :root {
    --borderRadius: 190px;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${typography.family};
    background-color: ${colors.background};
    overflow-x: hidden;
    scroll-timeline: --the-scroller y;
  }

  a, li, nav, ul, p, h1, h2, h3, h4, h5, h6 {
    ${typography()}
  }

  a {
    ${typography('', '700', '20px', '24px')}

    text-decoration: none;
    cursor: pointer;

    &[href^="tel:"] {
      text-decoration: none;
      color: ${colors.brand};
    }
  }

  .color-{
    &brand {
      color: ${colors.brand};
    }

    &blue {
      color: ${colors.blue};
    }

    &red {  
      color: ${colors.red};
    }

    &yellow {
      color: ${colors.yellow};
    }

    &pink {   
      color: ${colors.pink};
    }

    &orange {
      color: ${colors.orange};
    }

  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 100%;

  ${Object.keys(device)
    .map((key, index) => {
      const currentSizeContainerKey = Object.keys(sizeContainer).find(
        (sizeKey) => sizeKey === key
      )
      const previousSizeContainerKey =
        sizeContainer[
          Object.keys(sizeContainer).indexOf(currentSizeContainerKey) - 1
        ]
      const width = previousSizeContainerKey
        ? sizeContainer[previousSizeContainerKey]
        : sizeContainer[key]

      return `
      @media ${device[key]} {
        width: ${width};
        ${key === 'laptop' || key === 'laptopL' ? 'padding: 20px;' : ''}
      }
    `
    })
    .join('')}
`
