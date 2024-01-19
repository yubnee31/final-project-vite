import React, { useState } from 'react'
import { Schedule } from '../../../types/global.d';
import St from './style';
import alarmIcon from '../../../assets/images/alarm-icon-white.png'
import activeAlarmIcon from '../../../assets/images/alarm-icon-active-white.png'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addSchedule } from '../../../api/artistapi';

const ScheduleList = ({id, userid, artist, date, place, title}: any) => {
  const queryClient = useQueryClient();
  const [ isOn, setIsOn ] = useState(false);
  // isOn이 set 되면 id 값과 일치하는 스케줄 찾기
  // 해당 타겟 스케줄을 userinfo에 추가 (-> 테이블 분리해서 연결해야하나? username + schedule id)
  // userinfo에 담겨있는 schedule을 mypage에 뿌려주기
  const addMutation = useMutation({
    mutationFn: addSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['userSchedule']})
    }
  })
  const onClickIsOnHandler = () => {
    setIsOn(!isOn)
    if (isOn) {
      console.log('isOn true')
      const schedule: Schedule = {
        userid: userid,
        scheduleId: id,
        artist: artist,
        title: title,
        date: date,
        place: place
      }
      addMutation.mutate(schedule)
    }
  }


  return (
    <St.ScheduleListDiv>
    <St.ScheduleListSection>
      <St.ScheduleListTimeP>{place}</St.ScheduleListTimeP>
      <St.ScheduleListTitleP>{title}</St.ScheduleListTitleP>
    </St.ScheduleListSection>
    <St.ScheduleListImg onClick={onClickIsOnHandler} src={isOn ? activeAlarmIcon : alarmIcon} />
  </St.ScheduleListDiv>
  )
}

export default ScheduleList