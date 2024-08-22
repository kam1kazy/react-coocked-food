import styled from 'styled-components'
import { colors, flex, typography } from '../../../../_variableStyle'

export const NavigationList = styled.nav`
  ${flex('row', 'center', 'flex-end')}

  margin: 0;
  padding: 0;

  padding-right: 40px;
  gap: 40px;

  list-style: none;
  @keyframes gap {
    from {
      gap: 40px;
    }
    5% {
      gap: 40px;
    }
    20% {
      gap: 55px;
    }
    30% {
      gap: 75px;
    }
    to {
      gap: 75px;
    }
  }

  animation: gap auto linear;
  animation-timeline: scroll();
`

export const NavigationItem = styled.li`
  ${typography('', '', '14px', '18px')};
  color: ${colors.primary};
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: ${colors.brand};
  }
`
