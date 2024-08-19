import React from 'react'
import { LogoContainer, LogoImage, LogoText } from './styles'

function LogoComponent() {
  return (
    <LogoContainer>
      <LogoImage src='./assets/images/logo.png' alt='Logo' />
      <LogoText>healthy ration</LogoText>
    </LogoContainer>
  )
}

export default LogoComponent
