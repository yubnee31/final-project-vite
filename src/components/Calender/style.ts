import styled from 'styled-components';

// Wrapper
export const StWrapper = styled.div`
  width: 900px;
  height: 700px;
`;

// Year-Month
export const StMonthDiv = styled.div`
  width: 875px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: start;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

// Day Columns
export const StDayColumnUl = styled.ul`
  display: flex;
  padding-left: 1px;
`;

export const StDayColumnLi = styled.li`
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
  outline: 1px solid gray;
`;

export const StDayP = styled.p`
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
  width: 100px;
  height: 35px;
  font-size: 12px;
  margin-left: 10px;

  margin-bottom: 5px;
  border-bottom: 1px solid #434343;
`;

export const StScheduleArtistP = styled.div`
  margin-bottom: 5px;
  color: #aaaaaa;
`;
