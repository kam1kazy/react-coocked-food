import styled from 'styled-components'
import { Container } from '../../styles'
import { flex } from '../../_variableStyle'

export const Header = styled.header`
  ${Container} {
    position: relative;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  margin: 0 auto;
  margin-top: 20px;
  margin-right: 5px;

  z-index: 2;

  .wrapper {
    ${flex('row', 'center', 'space-between')};
  }

  @keyframes headerMargin {
    from {
      top: 0;
    }
    10% {
      top: 0;
    }
    30% {
      top: -10px;
    }
    45% {
      top: -30px;
    }
    85% {
      top: -30px;
    }
    to {
      top: -30px;
    }
  }

  animation-name: headerMargin;
  animation-duration: auto;
  animation-timing-function: linear;
  animation-timeline: scroll();
`
