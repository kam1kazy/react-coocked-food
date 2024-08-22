import React from 'react'
import LogoComponent from '../header/headerContainer/logo/Logo'

// DATA
import { dataFooter } from './_dataFooter'

// IMPORT
import { data } from '../header/_dataNav'

// STYLES
import {
  Footer,
  FooterNav,
  FooterNavLink,
  FooterAssetsLink,
  FooterAssetsLinkSocial,
} from './styles'
import { Container } from '../../styles'

function FooterComponent() {
  return (
    <Footer>
      <Container>
        <FooterNav>
          {data.map((item) => (
            <li key={item.id}>
              <FooterNavLink>{item.title}</FooterNavLink>
            </li>
          ))}
        </FooterNav>

        <LogoComponent text={'сервис здорового питания'} />

        <FooterNav>
          {dataFooter.map((item) => {
            // Возвращает соц сети
            if (item.id === 'social') {
              return (
                <li key={item.id}>
                  {Object.keys(item.urls).map((key) => (
                    <FooterAssetsLinkSocial
                      key={key}
                      href={item.urls[key].url}
                      target='_blank'
                    >
                      <img src={item.urls[key].image} alt={item.urls[key].id} />
                    </FooterAssetsLinkSocial>
                  ))}
                </li>
              )
            }

            // Остальные пункты
            return (
              <li key={item.id}>
                <FooterAssetsLink href={item.url}>
                  {item.title}
                </FooterAssetsLink>
              </li>
            )
          })}
        </FooterNav>
      </Container>
    </Footer>
  )
}

export default FooterComponent
