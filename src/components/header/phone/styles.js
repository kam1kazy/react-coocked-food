import styled from 'styled-components'

export const NumberButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 20px;
  line-height: 24.38px;
  text-decoration: none;

  width: 280px;
  height: 52px;

  background-color: #f5faff;
  border-radius: 190px;
  box-shadow: 0 0 40px 0 rgba(86, 86, 86, 0.3);
  color: #64d370;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #020202;
  }
`
