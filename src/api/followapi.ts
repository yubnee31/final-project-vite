import {supabase} from './supabase';

export const findUserByEmail = async (email: string) => {
  try {
    const {data: users, error} = await supabase.from('users').select('*').eq('email', email);
    console.log(users);
    if (error) {
      console.error('유저 조회 실패', error);
      return null;
    }

    if (users.length > 0) {
      // 여러 사용자 중에서 첫 번째 사용자를 선택
      return users[0];
    } else {
      console.error('해당 이메일을 가진 사용자가 없습니다.');
      return null;
    }
  } catch (error) {
    console.error('유저 조회 실패', error);
    return null;
  }
};

export const findUsersByEmailList = async emailList => {
  try {
    const {data: users, error} = await supabase.from('users').select('*').in('email', emailList);

    if (error) {
      console.error('유저 목록 조회 실패', error);
      return [];
    }

    return users;
  } catch (error) {
    console.error('유저 목록 조회 실패', error);
    return [];
  }
};
