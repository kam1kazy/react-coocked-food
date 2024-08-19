import styled from 'styled-components'

export const LogoContainer = styled.div`
  @keyframes scroll {
    from {
      transform: scale(1);
      left: 0;
    }
    30% {
      transform: scale(1);
      left: 0;
    }
    75% {
      transform: scale(0.4);
      left: -60px;
    }
    85% {
      transform: scale(0.4);
      left: -60px;
    }
    to {
      transform: scale(0.4);
      left: -60px;
    }
  }

  position: absolute;
  left: 0;
  top: 15px;
  bottom: 0;
  margin: auto 0;

  width: 262px;
  height: 264px;
  background-color: #f5faff;
  box-shadow: 0px 0px 40px 0px #5656564d;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: scroll auto linear;
  animation-timeline: scroll();
`

export const LogoImage = styled.img`
  width: 290px;
  height: 120px;
  margin-top: -15px;
  margin-right: 5px;
`

export const LogoText = styled.p`
  font-family: 'Comfortaa', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 16.21px;
  text-align: center;
  margin: 0;
  margin-top: -11px;
`
