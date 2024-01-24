import {supabase} from './supabase';

export const updateLikes = async ({id, likeUserInfo, likeCount}: any) => {
  try {
    const {error} = await supabase.from('posts').update({like: likeCount, like_userInfo: likeUserInfo}).eq('id', id);
  } catch (error) {
    console.log('Error', error);
  }
};
