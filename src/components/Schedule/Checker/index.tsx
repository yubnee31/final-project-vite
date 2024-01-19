import React from 'react'
import { getArtistSchedule } from '../../../api/artistapi';
import { useQuery } from '@tanstack/react-query';
import St from './style';
import ScheduleList from '../ScheduleList';

const Checker = ({param}: string) => {
  const { data: schedule } = useQuery({
    queryKey: ['schedule'],
    queryFn: getArtistSchedule,
  });
  const targetData = schedule?.filter((el) => el.artist === param)

  const scheduleChecker: { checker: number; dayString: string; day: string; }[] = [];

  const weekCalculator = () => {
    const weekList = ['일', '월', '화', '수', '목', '금', '토', '일']
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const todayString = `${year}-${month}-${day}`

    for (let i = 0; i < 7; i++) {
      const sunday = new Date(today)
      sunday.setDate(today.getDate() - new Date(todayString).getDay())

      const week = new Date(sunday)
      week.setDate(sunday.getDate() + i)
      const year = week.getFullYear();
      const month = ('0' + (week.getMonth() + 1)).slice(-2);
      const day = ('0' + week.getDate()).slice(-2);
      const weekDay = `${year}-${month}-${day}`
      scheduleChecker.push({checker: i, dayString: weekList[i], day: weekDay})
    }
  }

  weekCalculator()

  return (
    <St.ScheduleDiv>
    <St.ScheduleUl>
      {
        scheduleChecker
        .map((e) => {
          return (
            <St.ScheduleLi>
              <St.ScheduleDayP>{e.dayString}</St.ScheduleDayP>
              {
                targetData?.filter((el: { date: string; }) => el.date === e.day)
                .map((ele) => {
                  return (
                    <ScheduleList 
                    id={ele.id}
                    place={ele.place}
                    title={ele.title}
                    />
                  )
                })
              }
            </St.ScheduleLi>
          )
        })
      }
    </St.ScheduleUl>
  </St.ScheduleDiv>
  )
}

export default Checker