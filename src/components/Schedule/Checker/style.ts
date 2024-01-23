import styled from 'styled-components';

const ScheduleDiv = styled.div`
  width: 1200px;
  height: 300px;
`;
const ScheduleUl = styled.ul`
  display: flex;
  justify-content: space-around;
  height: inherit;
  margin-top: 40px;
`;
const ScheduleLi = styled.li`
  text-align: left;
  width: 150px;
  height: inherit;
`;
const ScheduleDayP = styled.p`
  font-size: 15px;
  border-bottom: 2px solid gray;
  height: 25px;
`;

const ScheduleListDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #3a3a3a;
  margin-top: 10px;
`;
const ScheduleListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 130px;
`;
const ScheduleListTimeP = styled.p`
  color: gray;
  font-size: 12px;
`;
const ScheduleListTitleP = styled.p`
  color: white;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const ScheduleListImg = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
  background-size: cover;
  cursor: pointer;
`;
export default {
  ScheduleDiv,
  ScheduleUl,
  ScheduleLi,
  ScheduleDayP,
  ScheduleListDiv,
  ScheduleListSection,
  ScheduleListTimeP,
  ScheduleListTitleP,
  ScheduleListImg,
};
