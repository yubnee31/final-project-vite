import React, {useState} from 'react';
import {signUp} from '../../api/auth';
import {useNavigate} from 'react-router-dom';
import {StForm, StFormDiv, StFormWrapper, StInfoP, StInput, StSignupBtn, StTitleP} from './style';

const Join = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignupButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(email, password, nickname);
    alert('회원가입이 완료되었습니다');
    navigate('/login');
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    email.includes('@') && password.length >= 8 && password === passwordAgain && nickname.length >= 2
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    email.includes('@') && password.length >= 8 && password === passwordAgain && nickname.length >= 2
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlePasswordAgainInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordAgain = e.target.value;
    setPasswordAgain(passwordAgain);
    email.includes('@') && password.length >= 8 && password === passwordAgain && nickname.length >= 2
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handleNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nickname = e.target.value;
    setNickname(nickname);
    email.includes('@') && password.length >= 8 && password === passwordAgain && nickname.length >= 2
      ? setIsValid(true)
      : setIsValid(false);
  };

  return (
    <StFormWrapper>
      <StForm onSubmit={handleSignupButtonClick}>
        <StFormDiv>
          <StTitleP>AIdol inc.</StTitleP>
          <StInfoP>이메일로 회원가입을 해주세요.</StInfoP>
          <StInput placeholder="이메일 주소" value={email} onChange={handleEmailInput}></StInput>
          <StInput
            type="password"
            placeholder="새로운 비밀번호"
            value={password}
            onChange={handlePasswordInput}
          ></StInput>
          <StInput
            type="password"
            placeholder="새로운 비밀번호 확인"
            value={passwordAgain}
            onChange={handlePasswordAgainInput}
          ></StInput>
          <StInput placeholder="사용할 닉네임 입력" value={nickname} onChange={handleNicknameInput}></StInput>
          <StSignupBtn
            type="submit"
            disabled={!isValid}
            style={{
              background: isValid ? 'linear-gradient(45deg, #cc51d6, #5a68e8, #e1b1ff)' : '#aeaeb2',
            }}
          >
            회원가입
          </StSignupBtn>
        </StFormDiv>
      </StForm>
    </StFormWrapper>
  );
};

export default Join;
