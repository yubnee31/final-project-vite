import React, {useEffect, useState} from 'react';
import {supabase} from '../../api/supabase';
import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';
import {loginState} from '../../shared/recoil/authAtom';
import {
  StCreateAccountSpan,
  StDivisionDiv,
  StForm,
  StFormDiv,
  StFormWrapper,
  StGoogleLoginBtn,
  StInfoP,
  StInput,
  StKakaoLoginBtn,
  StSigninBtn,
  StSignupBtnDiv,
  StSpan,
  StTitleP,
} from './style';
import {FcGoogle} from 'react-icons/fc';
import {RiKakaoTalkFill} from 'react-icons/ri';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();

  //리코일로 로그인상태관리
  const setLogin = useSetRecoilState(loginState);

  // user 정보 테스트
  // useEffect(() => {
  //   const userInfo = async () => {
  //     const {
  //       data: {user},
  //     } = await supabase.auth.getUser();
  //     console.log(user);
  //   };
  //   userInfo();
  // }, []);

  // 이메일 로그인
  const handleLoginButtonClick = async () => {
    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    // 리코일 깊은 복사
    setLogin(JSON.parse(JSON.stringify(data.user)));
    if (data.user !== null) navigate('/');
    if (error) alert('이메일 혹은 비밀번호를 확인해주세요!');
  };

  // google 로그인
  const googleLogin = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
    setLogin(JSON.parse(JSON.stringify(data.provider)));
    if (error) console.log('error', error);
  };

  // kakao 로그인
  const kakaoLogin = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
    setLogin(JSON.parse(JSON.stringify(data.provider)));
    if (error) console.log('error', error);
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    email.includes('@') && password.length >= 8 ? setIsValid(true) : setIsValid(false);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    email.includes('@') && password.length >= 8 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <StFormWrapper>
      <StForm onSubmit={e => e.preventDefault()}>
        <StFormDiv>
          <StTitleP>AIdol inc.</StTitleP>
          <StInfoP>로그인 혹은 회원가입을 해주세요.</StInfoP>
          <StInput placeholder="이메일 주소" value={email} onChange={handleEmailInput}></StInput>
          <StInput
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={handlePasswordInput}
            minLength={8}
          ></StInput>
          <StSigninBtn
            type="submit"
            disabled={!isValid}
            onClick={handleLoginButtonClick}
            style={{
              background: isValid ? 'linear-gradient(45deg, #cc51d6, #5a68e8, #e1b1ff)' : '#aeaeb2',
            }}
          >
            로그인
          </StSigninBtn>
          <StSignupBtnDiv>
            <StSpan>아직 계정이 없다면?</StSpan>
            <StCreateAccountSpan onClick={() => navigate('/signup')}>이메일 주소로 가입하기</StCreateAccountSpan>
          </StSignupBtnDiv>
          <StDivisionDiv>Or</StDivisionDiv>
          <StGoogleLoginBtn onClick={googleLogin}>
            <FcGoogle style={{backgroundColor: 'transparent'}} />
            &nbsp; 구글 로그인
          </StGoogleLoginBtn>
          <StKakaoLoginBtn onClick={kakaoLogin}>
            <RiKakaoTalkFill style={{backgroundColor: 'transparent'}} />
            &nbsp; 카카오 로그인
          </StKakaoLoginBtn>
        </StFormDiv>
      </StForm>
    </StFormWrapper>
  );
};

export default Signin;
