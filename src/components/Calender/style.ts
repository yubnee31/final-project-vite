import styled from 'styled-components';

// Wrapper
export const StWrapper = styled.div`
  background-color: #121212;
  width: 975px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Year-Month
export const StMonthDiv = styled.div`
  background-color: #121212;
  width: 975px;
  height: 50px;
  margin-right: 100px;
  margin-top: 80px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: start;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

// Day Columns
export const StDayColumnUl = styled.ul`
  background-color: #121212;
  display: flex;
  width: 975px;
  padding-left: 1px;
`;

export const StDayColumnLi = styled.li`
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 30px;
  outline: 1px solid gray;
  color: #b2b2b2;
`;

// Day List
export const StDayUl = styled.ul`
  background-color: #121212;
  width: inherit;
  height: inherit;

  display: grid;
  grid-template-columns: repeat(7, 125px);
  grid-template-rows: repeat(5, 140px);
  grid-auto-columns: 125px;
  grid-auto-rows: 140px;

  padding-left: 1px;
`;

export const StDayli = styled.li`
  background-color: #121212;
  outline: 1px solid gray;
`;

export const StDayP = styled.p`
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  color: gray;
  margin: 6px;
  width: 20px;
  height: 20px;
  &.today {
    background-color: #9747ff;
    border-radius: 50%;
    color: white;
  }
`;

export const StScheduleDiv = styled.div`
  background-color: #121212;
  width: 100px;
  height: 35px;
  font-size: 12px;
  margin-left: 10px;

  margin-bottom: 5px;
  border-bottom: 1px solid #434343;
`;

export const StScheduleArtistP = styled.div`
  background-color: #121212;
  margin-bottom: 5px;
  color: #aaaaaa;
`;
