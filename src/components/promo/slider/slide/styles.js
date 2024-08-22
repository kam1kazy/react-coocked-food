import styled from 'styled-components'
import { Container } from '../../../../styles'
import { boxShadow, typography, colors, flex } from '../../../../_variableStyle'

export const SlideItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  opacity: 0;

  transition: opacity 1s ease-in-out;

  &:target {
    opacity: 1;
  }
`

export const SlideLeft = styled.div`
  padding: 20px;
  margin-left: 20px;

  ${Container} {
    margin-top: 347px;

    .wrapper {
      max-width: max-content;
    }
  }
`

export const SlideHeader = styled.h2`
  ${typography('Comfortaa', '700', '40px', '44px')}

  max-width: 550px;
  letter-spacing: 0.025em;
  text-align: left;
  pointer-events: none;
  min-height: 135px;
`

export const SlideDescription = styled.p`
  ${typography('', '400', '26px', '26px')}

  text-align: left;
  margin: 15px 5px 0;
  pointer-events: none;
`

export const SlideOrder = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 42px;
`

export const SlidePrice = styled.p`
  ${typography('', '', '20px', '26px')}
  pointer-events: none;

  span {
    ${typography('', '700', '35px', '35px')}
    ${colors.brand}
    display: block;
  }
`

export const SlideButton = styled.span`
  ${flex('', 'center', 'center')};
  ${boxShadow()}
  ${typography('Comfortaa', '700', '26px', '')}

  background-color: ${colors.background};
  color: ${colors.primary};

  width: 280px;
  height: 60px;
  border-radius: var(--borderRadius);

  cursor: pointer;
`

export const SlideRight = styled.div`
  position: absolute;
  top: 542px;
  left: ${(props) => (props.left ? props.left : '690px')};

  border-radius: 100%;
  transform: translateY(-50%);

  ${boxShadow()}

  width: 1321px;
  height: 1290px;

  transition: left 0.5s ease-out;
`

export const Circle = styled.div`
  position: absolute;
  top: 298px;
  left: 186px;
  width: 694px;
  height: 690px;

  ${boxShadow(30, '')}
  background: #fff;

  border-radius: 100%;
  border: 35px solid #fff;
  box-sizing: border-box;

  transition: top 2s ease-in-out;

  /* Анимация круга с картинкой в промо */

  @keyframes slide {
    from {
      top: 298px;
    }
    50% {
      top: 298px;
    }
    to {
      top: 360px;
    }
  }
  animation: slide auto linear;
  animation-timeline: scroll();
`

export const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  min-height: 620px;
`
