import { supabase } from "./supabase";

// 이메일 회원가입
export const signUp = async (
  email: string,
  password: string,
  nickname: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        nickname: nickname,
      },
    },
  });
  if (data) console.log(data);
  if (error) console.log("error", error);
};
