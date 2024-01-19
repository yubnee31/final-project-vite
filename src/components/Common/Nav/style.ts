import styled from 'styled-components';

export const StNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #000000a8;
  z-index: 100;
  padding: 0px 240px 0px 240px;
`;

export const StNavDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

// Logo
export const StLogoDiv = styled.div`
  width: 75%;
  background-color: transparent;
`;

export const StLogoSpan = styled.span`
  color: white;
  font-size: 30px;
  font-weight: bold;
  background-color: transparent;

  cursor: pointer;
`;

// Input
export const StForm = styled.form`
  width: 200px;
  height: 43px;
  border: 2px solid white;
  background-color: transparent;
  border-radius: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StInput = styled.input`
  width: 150px;
  background: none;
  outline: none;
  float: left;
  border: none;
  font-size: 17px;
  margin-left: 10px;
`;

export const StSearchButton = styled.button`
  width: 30px;
  height: 29px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`;

// Button
export const StBtnDiv = styled.div`
  /* width: 25%; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const StButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
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
`;

export const StBtnP = styled.p`
  color: black;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
`;

export const StImg = styled.img`
  width: inherit;
  height: inherit;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
