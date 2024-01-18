import styled from 'styled-components';

const ScheduleListDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #3a3a3a;
  margin-top: 10px;
`
const ScheduleListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 130px;

`
const ScheduleListTimeP = styled.p`
  color: gray;
  font-size: 12px;
`
const ScheduleListTitleP = styled.p`
  color: white;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`
const ScheduleListImg = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
  background-size: cover;
  cursor: pointer;
`
export default { ScheduleListDiv, ScheduleListSection, ScheduleListTimeP, ScheduleListTitleP, ScheduleListImg }
