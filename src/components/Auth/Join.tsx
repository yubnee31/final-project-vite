import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {StErrorMessage, StForm, StFormDiv, StFormWrapper, StInfoP, StInput, StSignupBtn, StTitleP} from './style';
import {toast} from 'react-toastify';
import {supabase} from '../../api/supabase';

const Join = () => {
  //input
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();

  // 에러
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordAgainError, setPasswordAgainError] = useState<string>('');
  const [nicknameError, setNicknameError] = useState<string>('');

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(() => {
      const newEamil = e.target.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!newEamil) setEmailError('이메일 아이디를 입력해주세요.');
      else if (!emailRegex.test(newEamil)) setEmailError('올바른 이메일 형식이 아닙니다.');
      else setEmailError('');
      return newEamil;
    });
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(() => {
      const newPassword = e.target.value;
      if (!newPassword) setPasswordError('비밀번호를 입력해주세요.');
      else if (newPassword.length < 8) setPasswordError('비밀번호는 8자 이상이어야 합니다.');
      else setPasswordError('');
      return newPassword;
    });
  };

  const handlePasswordAgainInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordAgain(() => {
      const newPasswordAgain = e.target.value;
      if (!newPasswordAgain) setPasswordAgainError('비밀번호 확인을 입력해주세요.');
      else if (password !== newPasswordAgain) setPasswordAgainError('비밀번호를 잘못 입력하셨습니다.');
      else setPasswordAgainError('');
      return newPasswordAgain;
    });
  };

  const handleNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(() => {
      const newNickname = e.target.value;
      if (!newNickname) setNicknameError('닉네임을 입력해주세요.');
      else if (newNickname.length < 2) setNicknameError('닉네임은 2자 이상이어야 합니다.');
      else setNicknameError('');
      setIsValid(true);
      return newNickname;
    });
  };

  const handleSignupButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {data, error} = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: nickname,
        },
      },
    });
    if (data.user !== null) {
      toast.success('회원가입이 완료되었습니다');
      navigate('/login');
    }
    if (error) {
      toast.error('회원가입에 실패했습니다');
    }
  };

  useEffect(() => {
    // 모두 만족할때 isValid를 true로 만드는 조건
    if (!email.includes('@')) {
      setIsValid(false);
      return;
    }
    if (password.length < 8) {
      setIsValid(false);
      return;
    }
    if (password !== passwordAgain) {
      setIsValid(false);
      return;
    }
    if (nickname.length < 2) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }, [email, password, passwordAgain, nickname]);

  return (
    <StFormWrapper>
      <StForm onSubmit={handleSignupButtonClick}>
        <StFormDiv>
          <StTitleP>AIdol inc.</StTitleP>
          <StInfoP>이메일로 회원가입을 해주세요.</StInfoP>
          <StInput placeholder="이메일 주소" value={email} onChange={handleEmailInput} required></StInput>
          <StErrorMessage>{emailError}</StErrorMessage>
          <StInput
            type="password"
            placeholder="새로운 비밀번호"
            value={password}
            onChange={handlePasswordInput}
            required
          ></StInput>
          <StErrorMessage>{passwordError}</StErrorMessage>
          <StInput
            type="password"
            placeholder="새로운 비밀번호 확인"
            value={passwordAgain}
            onChange={handlePasswordAgainInput}
            required
          ></StInput>
          <StErrorMessage>{passwordAgainError}</StErrorMessage>
          <StInput
            placeholder="사용할 닉네임 입력"
            value={nickname}
            onChange={handleNicknameInput}
            required
            minLength={2}
          ></StInput>
          <StErrorMessage>{nicknameError}</StErrorMessage>
          <StSignupBtn
            type="submit"
            disabled={isValid ? false : true}
            style={{background: isValid ? 'linear-gradient(45deg, #cc51d6, #5a68e8)' : '#aeaeb2'}}
          >
            회원가입
          </StSignupBtn>
        </StFormDiv>
      </StForm>
    </StFormWrapper>
  );
};

export default Join;
