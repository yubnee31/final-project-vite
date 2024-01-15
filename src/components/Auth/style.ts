import styled from 'styled-components';

export const StFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  /* align-items: center; 
  justify-content: center;
  flex-direction: column;
  text-align: center; */
`;

export const StForm = styled.form`
  background-color: #2a2a2a;
  width: 400px;
  height: 500px;
  border-radius: 10px;
`;

export const StFormDiv = styled.div`
  width: 300px;
  height: 400px;
  margin: 35px auto;
  text-align: left;
  background-color: transparent;
`;

export const StTitleP = styled.p`
  height: 40px;
  font-size: x-large;
  background-color: transparent;
  user-select: none;
`;

export const StInfoP = styled.p`
  height: 30px;
  font-size: small;
  background-color: transparent;
`;

export const StInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  border-width: 0 0 1px;
  background-color: transparent;
`;

export const StErrorMessage = styled.span`
  color: red;
  background-color: transparent;
  font-size: x-small;
`;

export const StSigninBtn = styled.button`
  width: 300px;
  height: 40px;
  font-size: small;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  /* background-image: linear-gradient(45deg, #cc51d6, #5a68e8, #e1b1ff); */
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const StSignupBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  font-size: x-small;
  gap: 5px;
  margin-top: 15px;
`;

export const StSpan = styled.span`
  background-color: transparent;
  color: #aeaeb2;
`;

export const StCreateAccountSpan = styled.span`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const StDivisionDiv = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #aeaeb2;
  font-size: x-small;
  margin: 25px 0px;
  background-color: transparent;
  user-select: none;
  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    background: #636366;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 7px;
  }
`;

export const StGoogleLoginBtn = styled.button`
  width: 300px;
  height: 40px;
  font-size: small;
  background-color: white;
  color: black;
  border: none;
  margin-bottom: 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const StKakaoLoginBtn = styled.button`
  width: 300px;
  height: 40px;
  font-size: small;
  background-color: #fee500;
  color: black;
  border: none;
  margin-bottom: 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const StSignupBtn = styled.button`
  width: 300px;
  height: 40px;
  font-size: small;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  /* background-image: linear-gradient(45deg, #cc51d6, #5a68e8, #e1b1ff); */
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
