import {supabase} from './supabase';

// 유저 정보 가져오기
const getCurrentUser = async () => {
  const {
    data: {user},
  } = await supabase.auth.getUser();
  console.log('현재 로그인 된 유저', user!.id);
  console.log('user', user);
  return user;
};

export {getCurrentUser};
