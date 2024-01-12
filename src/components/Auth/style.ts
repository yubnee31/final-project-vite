import styled from 'styled-components';

// 로그인페이지 css
export const StFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 100px;
`;

export const StForm = styled.form`
  background-color: #63636670;
  width: 400px;
  height: 500px;
`;

export const StFormDiv = styled.div`
  width: 300px;
  height: 400px;
  margin: 40px auto;
  text-align: left;
  background-color: transparent;
`;

export const StTitleP = styled.p`
  height: 40px;
  font-size: x-large;
  background-color: transparent;
`;

export const StInfoP = styled.p`
  height: 30px;
  font-size: small;
  background-color: transparent;
  margin-bottom: 5px;
`;

export const StInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 10px;
  border-width: 0 0 1px;
  background-color: transparent;
`;

export const StSigninBtn = styled.button`
  width: 300px;
  height: 45px;
  font-size: small;
  margin-top: 10px;
  border: none;
  background-image: linear-gradient(45deg, #d651d6, #5a68e8, #e1b1ff);
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const StDivisionDiv = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #aeaeb2;
  font-size: small;
  margin: 15px 0px;
  background-color: transparent;
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

export const StSocialLoginBtn = styled.button`
  width: 300px;
  height: 45px;
  font-size: small;
  background-color: white;
  color: black;
  border: none;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const StSignupBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  margin-top: 10px;
`;

export const StSpan = styled.span`
  font-size: small;
  background-color: transparent;
`;

export const StCreateAccountBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #cc51d6;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
