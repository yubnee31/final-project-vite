import {supabase} from './supabase';

// google 로그인
export const googleLogin = async () => {
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  console.log(data);
  if (error) console.log('error', error);
};

// kakao 로그인
export const kakaoLogin = async () => {
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  console.log(data);
  if (error) console.log('error', error);
};

// 이메일 회원가입
export const signUp = async (email: string, password: string, nickname: string) => {
  const {data, error} = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        nickname: nickname,
      },
    },
  });
  if (data) console.log(data);
  if (error) console.log('error', error);
};
