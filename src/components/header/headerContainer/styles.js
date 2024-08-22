import styled from 'styled-components'
import { LogoContainer } from './logo/styles'
import { flex, boxShadow, colors } from '../../../_variableStyle'

export const HeaderContainer = styled.div`
  ${flex('row', 'center', 'flex-end')}
  ${boxShadow()}

  height: 52px;
  width: 880px;
  background-color: ${colors.background};
  border-radius: var(--borderRadius);

  ${LogoContainer} {
    position: absolute;
    left: 0;
    top: 15px;
    bottom: 0;
    height: 264px;

    /* Тени логотипа */
    ${boxShadow()}

    /* Анимация */
    @keyframes scroll {
      from {
        transform: scale(1);
        left: 0;
      }
      5% {
        transform: scale(1);
        left: 0;
      }
      30% {
        transform: scale(0.4);
        left: -60px;
        top: 0px;
      }
      85% {
        transform: scale(0.4);
        left: -60px;
        top: 0px;
      }
      to {
        transform: scale(0.4);
        left: -60px;
        top: 0px;
      }
    }

    animation-name: scroll;
    animation-duration: auto;
    animation-timing-function: linear;
    animation-timeline: scroll();
  }
`
