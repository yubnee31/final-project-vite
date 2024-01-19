import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getArtistSchedule } from '../../../api/artistapi';
import St from './style';
import alarmIcon from '../../../assets/images/alarm-icon-white.png'
import activeAlarmIcon from '../../../assets/images/alarm-icon-active-white.png'

const ScheduleList = ({id, place, title}: any) => {
  const [ isOn, setIsOn ] = useState(false);
  // isOn이 set 되면 스케줄 전체를 불러와서 id 값과 일치하는 걸 찾기
  // 해당 타겟 스케줄을 userinfo에 추가 (-> 테이블 분리해서 연결해야하나? username + schedule id)
  // userinfo에 담겨있는 schedule을 mypage에 뿌려주기
  if (isOn) {
    console.log('isOn true')
    // const { data: schedule } = useQuery({
    //   queryKey: ['schedule'],
    //   queryFn: getArtistSchedule,
    // });
    // console.log(schedule)
  }

  return (
    <St.ScheduleListDiv>
    <St.ScheduleListSection>
      <St.ScheduleListTimeP>{place}</St.ScheduleListTimeP>
      <St.ScheduleListTitleP>{title}</St.ScheduleListTitleP>
    </St.ScheduleListSection>
    <St.ScheduleListImg onClick={() => {setIsOn(!isOn)}} src={isOn ? activeAlarmIcon : alarmIcon} />
  </St.ScheduleListDiv>
  )
}

export default ScheduleList