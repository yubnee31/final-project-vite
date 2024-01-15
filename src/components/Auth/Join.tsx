import React, {useState} from 'react';
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
  const navigate = useNavigate();

  // 에러
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordAgainError, setPasswordAgainError] = useState<string>('');
  const [nicknameError, setNicknameError] = useState<string>('');

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) setEmailError('이메일 아이디를 입력해주세요.');
    else if (!emailRegex.test(email)) setEmailError('올바른 이메일 형식이 아닙니다.');
    else setEmailError('');
    return email;
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    if (!password) setPasswordError('비밀번호를 입력해주세요.');
    else if (password.length < 8) setPasswordError('비밀번호는 8자 이상이어야 합니다.');
    else setPasswordError('');
    return password;
  };

  const handlePasswordAgainInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordAgain = e.target.value;
    setPasswordAgain(passwordAgain);
    if (!passwordAgain) setPasswordAgainError('비밀번호 확인을 입력해주세요.');
    else if (password !== passwordAgain) setPasswordAgainError('비밀번호가 동일하지 않습니다.');
    else setPasswordAgainError('');
    return passwordAgain;
  };

  const handleNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nickname = e.target.value;
    setNickname(nickname);
    if (!nickname) setNicknameError('닉네임을 입력해주세요.');
    else if (nickname.length < 2) setNicknameError('닉네임은 2자 이상이어야 합니다.');
    else setNicknameError('');
    return nickname;
  };

  const handleSignupButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {data, error} = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          nickname: nickname,
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
          <StSignupBtn type="submit" disabled={!email || !password || !passwordAgain || !nickname}>
            회원가입
          </StSignupBtn>
        </StFormDiv>
      </StForm>
    </StFormWrapper>
  );
};

export default Join;
