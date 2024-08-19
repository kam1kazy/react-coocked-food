import styled from 'styled-components'
import { Container } from '../../styles'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  margin-top: 20px;
  z-index: 9999;
  margin-right: 5px;

  ${Container} {
    position: relative;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }
`
