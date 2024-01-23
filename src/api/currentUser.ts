import {supabase} from './supabase';

// 유저 정보 가져오기
const getCurrentUser = async () => {
  const {
    data: {user},
  } = await supabase.auth.getUser();
<<<<<<< HEAD
  console.log('현재 로그인 된 유저', user?.id);
=======
  console.log('현재 로그인 된 유저', user!.id);
>>>>>>> c419a7b9944b8aa7cc57113968e692f46125798e
  console.log('user', user);
  return user;
};

export {getCurrentUser};
