import React from 'react'
import styled from 'styled-components';

const Calender = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()
  const day =today.getDate()
  const todayString = `${year}-${month}-${day}`

  const dayList = [];
  const dayChecker = [
    {checker: 0, dayString: 'Sun'},
    {checker: 1, dayString: 'Mon'},
    {checker: 2, dayString: 'Tue'},
    {checker: 3, dayString: 'Wed'},
    {checker: 4, dayString: 'Thu'},
    {checker: 5, dayString: 'Fri'},
    {checker: 6, dayString: 'Sat'},
  ]

  const lastCalculator = () => {
    const lastDay = new Date(year, month, 0)
    const dayLast = ('0' + lastDay.getDate()).slice(-2);

    for (let i = 1; i <= +dayLast; i++) {
      if (i === 1) {
        const firstDay = new Date(year, month, 1).getDay()
        const lastMonth = new Date(year, month-1, 0)
        console.log(lastMonth.getDate())

        console.log(firstDay)
      }
      dayList.push(i)
    }

    console.log(dayList)
  }

  lastCalculator()

  return (
    <StWrapper>
      <StdayUl>


        {
          dayList.map((e) => {
            return (
              <Stdayli>
                {e}
              </Stdayli>
            )
          })
        }
      </StdayUl>
    </StWrapper>
  )
}
const StWrapper = styled.div`
  width: 900px;
  height: 700px;
`
const StdayUl = styled.ul`
  width: inherit;
  height: inherit;

  display: grid;
  grid-template-columns:  repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
`
const Stdayli = styled.li`
  outline: 1px solid gray;
`


export default Calender