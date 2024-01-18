import styled from 'styled-components';

const ScheduleDiv = styled.div`
  width: 1200px;
  height: 300px;
`
const ScheduleUl = styled.ul`
    display: flex;
    justify-content: space-around;
    height: inherit;
    margin-top: 40px;
`
const ScheduleLi = styled.li`
text-align: left;
width: 150px;
height: inherit;
`
const ScheduleDayP = styled.p`
  font-size: 15px;
  border-bottom: 2px solid gray;
  height: 25px;
`

export default { ScheduleDiv, ScheduleUl, ScheduleLi, ScheduleDayP }