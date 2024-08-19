import styled from 'styled-components'

export const PaginItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  color: #020202;

  width: 70px;
  height: 70px;
  background: #f5faff;
  box-shadow: 0px 0px 30px 0px rgb(86 86 86 / 25%);

  border-radius: 100%;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgb(86 86 86 / 15%);
  }

  &:focus {
    box-shadow: 0px 0px 30px 0px rgb(86 86 86 / 5%);
  }
`
export const PaginIcon = styled.img``

export const PaginText = styled.span`
  font-family: Comfortaa;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.7px;
  text-align: center;
`
