import styled from 'styled-components'

// Табы
export const ProgramsTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const ProgramsTab = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 580px;
  height: 62px;
  background: #dee6ee;
  border-radius: 190px;
  box-shadow: 0 0 40px 0 rgba(86, 86, 86, 0.3);

  font-family: 'Comfortaa', sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 27.88px;

  color: #000000;
  text-decoration: none;

  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgb(86 86 86 / 0.2);
  }

  &.selected {
    background-color: #64d370;
    /* font-weight: 700; */
    color: #fff;
  }
`

// Планы

export const ModeList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Comfortaa;
  line-height: 20.07px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 70px;
`

export const ModeItem = styled.li`
  font-family: Montserrat;
  line-height: 17.07px;
  text-align: center;

  transition: color 0.3s ease-in-out;

  cursor: pointer;

  &.selected {
    color: #64d370;
  }

  &:hover {
    color: #64d370;
  }
`

export const ModeItemName = styled.span`
  display: block;
  text-transform: uppercase;
  /* font-weight: 700; */
  font-size: 18px;
  margin-bottom: 5px;
`

// Дни недели

export const WeekDays = styled.ul`
  width: 100%;
  height: 55px;
  border-radius: 30px;
  background: #f5faff;
  box-shadow: 0px 0px 40px 0px #5656564d;
  margin-top: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const WeekDay = styled.li`
  font-family: Comfortaa;
  font-size: 25px;
  /* font-weight: 700; */
  line-height: 27.88px;
  text-transform: uppercase;
  cursor: pointer;

  transition: color 0.3s ease-in-out;

  &.selected {
    color: #64d370;
  }

  &:hover {
    color: #64d370;
  }
`

// Список питания на день

export const Meals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 525px;
  border-radius: 30px;
  box-shadow: 0px 0px 40px 0px #5656564d;
  margin-top: 20px;
`
