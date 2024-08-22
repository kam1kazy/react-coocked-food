// variables
export const typography = (
  family = 'Montserrat',
  weight = '400',
  size = '16px',
  lineHeight = '24px',
  color = colors.primary
) => `

  font-family: ${family ? family : '"Montserrat"'}, sans-serif;
  font-weight: ${weight ? weight : '400'};
  font-size: ${size ? size : '16px'}
  line-height: ${lineHeight ? lineHeight : '24px'}
  color: ${color ? color : colors.primary};
`

export const boxShadow = (blur = '40', opacity = '0.30') => `
  box-shadow: 0px 0px ${blur ? blur : 40}px rgba(86, 86, 86, ${
  opacity ? opacity : 1
});
`

// mixins
export const flex = (
  direction = 'row',
  align = 'center',
  justify = 'center'
) => `
  display: flex;
  flex-direction: ${direction ? direction : 'row'};
  align-items: ${align ? align : 'center'};
  justify-content: ${justify ? justify : 'center'};
`

// media breakpoints
export const sizeContainer = {
  mobileS: '320px',
  mobileM: '460px',
  mobileL: '576px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1180px',
  desktopL: '2560px',
}

export const device = {
  mobileS: `(min-width: ${sizeContainer.mobileS})`,
  mobileM: `(min-width: ${sizeContainer.mobileM})`,
  mobileL: `(min-width: ${sizeContainer.mobileL})`,
  tablet: `(min-width: ${sizeContainer.tablet})`,
  laptop: `(min-width: ${sizeContainer.laptop})`,
  laptopL: `(min-width: ${sizeContainer.laptopL})`,
  desktopL: `(min-width: ${sizeContainer.desktopL})`,
}

export const colors = {
  brand: '#64d370',
  background: '#F5FAFF',

  primary: '#020202',
  secondary: '#DEE6EE',

  black: '#000',
  white: '#fff',

  /*  Добавил от себя для промо банера  */
  orange: '#d38f64',
  blue: '#64c2d3',
  red: '#d36494',
  yellow: '#d3c864',
  pink: '#cd64d3',
}
