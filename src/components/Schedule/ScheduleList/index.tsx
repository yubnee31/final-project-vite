import React, { useState } from 'react'
import St from './style';
import alarmIcon from '../../../assets/images/alarm-icon-white.png'
import activeAlarmIcon from '../../../assets/images/alarm-icon-active-white.png'

const ScheduleList = ({place, title}) => {
  const [ isOn, setIsOn ] = useState(false);

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