import {supabase} from './supabase';

// 유저 정보 가져오기
const getCurrentUser = async () => {
  const {
    data: {user},
  } = await supabase.auth.getUser();
  return user;
};

const getTargetUserInfo = async () => {
  try {
    const {data, error} = await supabase.from('userinfo').select('*');
    return data;
  } catch (error) {
    // console.log(error);
  }
};

export {getCurrentUser, getTargetUserInfo};
