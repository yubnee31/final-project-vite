import { useQuery } from '@tanstack/react-query';
import React from 'react'
import styled from 'styled-components';
import { getUserSchedule } from '../../api/artistapi';
import { getCurrentUser } from '../../api/currentUser';

const Calender = () => {
  const { data: currentUser } = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });
  const { data: userSchdule } = useQuery({
    queryKey: ['userSchedule'],
    queryFn: getUserSchedule,
  })
  const targetUserSchedule = userSchdule?.filter((el) => el.userid === currentUser.id)

  const dayList: number[] = [];
  const dayChecker = [
    { checker: 0, dayString: 'Sun' },
    { checker: 1, dayString: 'Mon' },
    { checker: 2, dayString: 'Tue' },
    { checker: 3, dayString: 'Wed' },
    { checker: 4, dayString: 'Thu' },
    { checker: 5, dayString: 'Fri' },
    { checker: 6, dayString: 'Sat' },
  ]

  // 금일
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1
  const dayMonth = today.getMonth()
  const day = today.getDate()
  const monthString = `${year}.${('0' + month).slice(-2)}`

  // 말일
  const lastDay = new Date(year, month, 0)
  const dayLast = lastDay.getDate()

  // 첫일 요일 
  const firstDay = new Date(year, dayMonth, 1).getDay()

  // 지난달 말일
  const lastMonth = new Date(year, month, 0)
  lastMonth.setMonth(lastMonth.getMonth() - 1)

  // this month
  for (let i = 1; i <= +dayLast; i++) {
    // last month
    if (i === 1) {
      for (let j = 0; j < firstDay; j++) {
        const lastDay = lastMonth.getDate() - j;
        dayList.push(lastDay)
      }
      dayList.sort((a, b) => a - b)
    }
    dayList.push(i)
  }
  // next month
  if (dayList.length < 35) {
    const maxLength = 35 - dayList.length
    for (let l = 1; l <= maxLength; l++) {
      dayList.push(l)
    }
  } else {
    const maxLength = 42 - dayList.length
    for (let l = 1; l <= maxLength; l++) {
      dayList.push(l)
    }
  }

  const textLengthHandler = (text: string) => {
    const maxLength = 13;
    if (text.length > maxLength) {
      const result = text.slice(0, maxLength) + '···';
      return result;
    }
  }
   

  return (
    <StWrapper>
      <StMonthDiv>{monthString}</StMonthDiv>
      <StDayColumnUl>
        {
          dayChecker.map((el) => {
            return (
              <StDayColumnLi>
                {el.dayString}
              </StDayColumnLi>
            )
          })
        }
      </StDayColumnUl>
      <StDayUl>
        {
          dayList.map((e) => {
            return (
              <StDayli>
                <StDayP className={e === day ? 'today' : ''}>{e}</StDayP>
                {
                  targetUserSchedule?.filter((el) => +el.date.slice(-2) === e)
                  .map((ele) => {
                    return (
                      <StScheduleDiv>
                        <StScheduleArtistP>{ele.artist}</StScheduleArtistP>
                        <StScheduleTitleP>{textLengthHandler(ele.title)}</StScheduleTitleP>
                      </StScheduleDiv>
                    )
                  })
                }
              </StDayli>

            )
          })
        }
      </StDayUl>
    </StWrapper>
  )
}

// Wrapper
const StWrapper = styled.div`
  width: 900px;
  height: 700px;
`

// Year-Month
const StMonthDiv = styled.div`
  width: 875px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: start;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
`

// Day Columns
const StDayColumnUl = styled.ul`
  display: flex;
`
const StDayColumnLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 30px;
  outline: 1px solid gray;

  color: #b2b2b2;    
`

// Day List
const StDayUl = styled.ul`
  width: inherit;
  height: inherit;

  display: grid;
  grid-template-columns: repeat(7, 125px);
  grid-template-rows: repeat(5, 140px);
  grid-auto-columns: 125px;
  grid-auto-rows: 140px;
`
const StDayli = styled.li`
  outline: 1px solid gray;
`
const StDayP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  color: gray;
  margin: 6px;
  width: 20px;
  height: 20px;
  &.today {
    background-color: #9747FF;
    border-radius: 50%;
    color: white;

  }
`
const StScheduleDiv = styled.div`
 width: 100px; 
 height: 35px;
 font-size: 12px;
 margin-left: 10px;

 margin-bottom: 5px;
  border-bottom: 1px solid #434343;
`
const StScheduleArtistP = styled.div`
margin-bottom: 5px;
color: #aaaaaa;
`
const StScheduleTitleP = styled.div`

`


export default Calender