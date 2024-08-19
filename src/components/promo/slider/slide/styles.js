import styled from 'styled-components'
import { Container } from '../../../../styles'

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

  ${Container} {
    margin-top: 347px;
  }
`

export const SlideHeader = styled.h2`
  max-width: 550px;
  font-family: Comfortaa;
  font-size: 40px;
  font-weight: 700;
  line-height: 44.6px;
  letter-spacing: 0.025em;
  text-align: left;
  pointer-events: none;
  min-height: 135px;
`

export const SlideDescription = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.76px;
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
  font-size: 20px;
  line-height: 26.76px;
  pointer-events: none;

  span {
    display: block;
    color: #64d370;
    font-family: Montserrat;
    font-size: 35px;
    font-weight: 700;
    line-height: 35px;
  }
`

export const SlideButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Comfortaa;
  font-size: 26px;
  color: #f5faff;
  background: #64d370;
  width: 280px;
  height: 60px;
  border-radius: 190px;
  box-shadow: 0px 0px 40px 0px #5656564d;

  cursor: pointer;
`

export const SlideRight = styled.div`
  position: absolute;
  transform: translateY(-50%);
  background: #64d370;
  width: 1321px;
  height: 1290px;
  top: 542px;
  left: 965px;
  border-radius: 100%;
  box-shadow: 0px 0px 40px 0px #56565666;
`

export const Circle = styled.div`
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

  position: absolute;
  width: 694px;
  height: 690px;
  top: 298px;
  left: 186px;
  background: #fff;
  border-radius: 100%;
  border: 35px solid #fff;
  box-shadow: 0px 0px 30px 0px #5656564d;
  box-sizing: border-box;

  transition: top 2s ease-in-out;

  /* Анимация круга с картинкой в промо */

  animation: slide auto linear;
  animation-timeline: scroll();
`

export const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`
