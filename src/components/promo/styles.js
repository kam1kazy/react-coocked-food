import styled from 'styled-components'

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`
export const Slide = styled.div``

export const SliderLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
`

export const SliderRight = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

export const Circle = styled.div`
  width: 1293.88px;
  height: 1293.88px;
  top: 147.47px;
  left: 799px;
  gap: 0px;
  opacity: 0px;
  transform: rotate(19.06deg);
`

export const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
