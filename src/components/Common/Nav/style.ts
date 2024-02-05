import styled from 'styled-components';

export const StNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #00000080;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 240px;
  @media screen and (max-width: 768px) {
    height: 64px;
  }
`;

export const StNavWrapper = styled.div`
  width: 99%;
  height: inherit;
  background-color: transparent;
`;

export const StNavDiv = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    padding: 0px 20px 0px 20px;
  }
`;

// Logo
export const StLogoDiv = styled.div`
  background-color: transparent;
`;

export const StLogoSpan = styled.span`
  color: white;
  font-size: 30px;
  font-weight: bold;
  background-color: transparent;

  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

// Input
export const StForm = styled.form`
  width: 230px;
  height: 43px;
  background-color: #2d2d2d;
  border-radius: 50px;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 150px;
    margin-right: 10px;
    margin-left: 5px;
  }
`;

export const StInput = styled.input`
  width: 130px;
  background: none;
  outline: none;
  float: left;
  border: none;
  font-size: 15px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    width: 70px;
    font-size: 12px;
  }
`;

export const StSearchButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

// Button
export const StBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const StButton = styled.button`
  width: 35px;
  height: 35px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
  position: relative;
  @media screen and (max-width: 768px) {
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }
`;
// Alarm
export const StAlarmDiv = styled.div`
  width: inherit;
  height: 70px;

  display: flex;
  justify-content: start;
  align-items: center;

  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #2c2c2c;
`;
export const StAlarmP = styled.p`
  margin-left: 25px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.5px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 10px;
  }
`;
export const StInfoP = styled.p`
  font-size: 12px;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-left: 0px;
  }
`;
export const StAlarmCounterP = styled.p`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #9747ff;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
`;
export const StAlarmListDiv = styled.div`
  position: absolute;
  top: 0%;

  width: 400px;
  height: 500px;
  cursor: default;
  margin-top: 90px;
  background-color: #121212;

  border-radius: 10px;

  &.On {
    display: inline-block;
  }
  &.OFF {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 280px;
    height: 200px;
    margin-right: 50px;
  }
`;
export const StAlarmListUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 110px;
  row-gap: 5px;

  background-color: inherit;
  border-radius: inherit;

  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background-color: #00000012;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #36363668;
    border-radius: 30px;
  }
`;
export const StAlarmListLi = styled.li`
  border-radius: 10px;

  background-color: transparent;

  position: relative;
  border-bottom: 1px solid #222222;
  margin: 5px;
`;
export const StAlarmContentsDiv = styled.div`
  background-color: transparent;

  margin-top: 18px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    margin-left: 14px;
  }
`;
export const StAlarmListP = styled.p`
  font-size: 13px;
  color: white;
  background-color: inherit;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 10px;
  }
`;
export const StAlarmTimeP = styled.p`
  position: absolute;
  bottom: 10%;
  left: 5%;

  background-color: inherit;
  font-size: 12px;
  color: #d6d6d6;
  @media screen and (max-width: 768px) {
    font-size: 9px;
  }
`;
export const StAlarmTitleP = styled.p`
  font-size: 15px;
  color: white;
  background-color: inherit;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
export const StAlarmDeleteBtn = styled.button`
  position: absolute;
  top: 14%;
  right: 2%;
  background-color: inherit;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 5%;
    right: 0%;
  }
`;

export const StSignInBtn = styled.button`
  background-color: #9747ff;
  border: none;
  width: 110px;
  height: 36px;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;

export const StBtnP = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StImg = styled.img`
  width: inherit;
  height: inherit;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
