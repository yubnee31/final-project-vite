import React, { useEffect, useState } from "react";
import { supabase } from "../../api/supabase";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../shared/recoil/authAtom";
import {
  StCreateAccountBtn,
  StDivisionDiv,
  StFormDiv,
  StFormWrapper,
  StInfoP,
  StInput,
  StLoginForm,
  StSigninBtn,
  StSignupBtnDiv,
  StSocialLoginBtn,
  StSpan,
  StTitleP,
} from "./style";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();

  //리코일로 로그인상태관리
  const setLogin = useSetRecoilState(loginState);

  // user 정보 테스트
  useEffect(() => {
    const userInfo = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
    };
    userInfo();
  }, []);

  // 이메일 로그인
  const handleLoginButtonClick = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    // 리코일 깊은 복사
    setLogin(JSON.parse(JSON.stringify(data.user)));
    if (data.user !== null) navigate("/");
    if (error) alert("로그인에 실패했습니다");
  };

  // google 로그인
  const googleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    setLogin(JSON.parse(JSON.stringify(data.provider)));
    if (error) console.log("error", error);
  };

  // kakao 로그인
  const kakaoLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    setLogin(JSON.parse(JSON.stringify(data.provider)));
    if (error) console.log("error", error);
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    email.includes("@") && password.length >= 6
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    email.includes("@") && password.length >= 6
      ? setIsValid(true)
      : setIsValid(false);
  };

  return (
    <StFormWrapper>
      <StLoginForm onSubmit={(e) => e.preventDefault()}>
        <StFormDiv>
          <StTitleP>AIdol inc.</StTitleP>
          <StInfoP>Sign in to your account.</StInfoP>
          <StInput
            placeholder="이메일 형식으로 입력해주세요"
            value={email}
            onChange={handleEmailInput}
          ></StInput>
          <StInput
            type="password"
            placeholder="비밀번호를 6자 이상으로 입력해주세요"
            value={password}
            onChange={handlePasswordInput}
            minLength={6}
          ></StInput>
          <StSigninBtn
            type="submit"
            disabled={!isValid}
            onClick={handleLoginButtonClick}
          >
            Sign in
          </StSigninBtn>
          <StDivisionDiv>Or</StDivisionDiv>
          <StSocialLoginBtn onClick={googleLogin}>
            Google로 로그인하기
          </StSocialLoginBtn>
          <StSocialLoginBtn onClick={kakaoLogin}>
            kakao로 로그인하기
          </StSocialLoginBtn>
          <StSignupBtnDiv>
            <StSpan>Need an account?</StSpan>
            <StCreateAccountBtn onClick={() => navigate("/signup")}>
              Create account
            </StCreateAccountBtn>
          </StSignupBtnDiv>
        </StFormDiv>
      </StLoginForm>
    </StFormWrapper>
  );
};

export default Signin;
