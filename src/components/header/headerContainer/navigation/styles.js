import styled from 'styled-components'

export const NavigationList = styled.nav`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  padding-right: 40px;

  @keyframes gap {
    from {
      gap: 40px;
    }
    50% {
      gap: 40px;
    }
    to {
      gap: 55px;
    }
  }

  animation: gap auto linear;
  animation-timeline: scroll();
`

export const NavigationItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 18.73px;
  color: #020202;
  cursor: pointer;

  &:hover {
    color: #64d370;
  }
`
