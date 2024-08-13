import styled from 'styled-components'

export const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  padding-right: 40px;
`

export const NavigationItem = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.73px;
  color: #020202;
  cursor: pointer;

  &:hover {
    color: #64d370;
  }
`
