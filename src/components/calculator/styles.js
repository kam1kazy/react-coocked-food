import styled from 'styled-components'
import { Container } from '../../styles'
import { flex, boxShadow } from '../../_variableStyle'

export const Calculator = styled.div`
  ${Container} {
    position: relative;
  }
`

// Список питания на день
export const Meals = styled.ul`
  ${flex('column', 'center', 'space-between')};

  padding: 40px 60px 40px;
  background: #f5faff;

  width: 100%;
  max-width: -webkit-fill-available;
  height: 525px;
  border-radius: 30px;

  ${boxShadow()}

  margin-top: 20px;

  list-style: none;
`
