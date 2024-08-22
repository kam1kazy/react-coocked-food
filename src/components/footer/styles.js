import styled from 'styled-components'

// COMPONENTS
import { LogoImage } from '../header/headerContainer/logo/styles'

// STYLES
import { Container } from '../../styles'
import { flex, boxShadow, typography } from '../../_variableStyle'

// Список питания на день
export const Footer = styled.div`
  ${boxShadow()}
  ${flex('row', 'center', 'space-between')};

  height: 263px;

  ${Container} {
    ${flex('row', 'center', 'space-between')};

    height: 100%;
    max-height: 200px;
    padding: 0;
  }

  ${LogoImage} {
    width: auto;
    height: 100%;
  }
`

export const FooterNav = styled.ul`
  ${flex('column', 'start', 'space-between')};
  ${typography('Comfortaa', '700', '20px', '100%')}
  height: 100%;

  &:last-child {
    align-items: flex-end;
    text-align: right;
    max-width: 230px;
  }
`

export const FooterNavLink = styled.a``

export const FooterAssetsLink = styled.a``

export const FooterAssetsLinkSocial = styled.a`
  margin-left: 15px;
`
