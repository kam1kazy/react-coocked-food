import React from 'react'
import { LogoContainer, LogoImage, LogoText } from './styles'

function LogoComponent({ text, position }) {
  return (
    <LogoContainer position={position}>
      <figure>
        <picture>
          <LogoImage src='./assets/images/logo.png' alt='Logo' loading='lazy' />
        </picture>
        <LogoText>{text ? text : 'healthy ration'}</LogoText>
      </figure>
    </LogoContainer>
  )
}

export default LogoComponent
