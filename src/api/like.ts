import {supabase} from './supabase';

const getLikes = async () => {
  try {
    const {data, error} = await supabase.from('postLike').select('*');
    return data;
  } catch (error) {
    // console.log("Error", error)
  }
};

const addLikes = async ({postid, userid}) => {
  try {
    const {error} = await supabase.from('postLike').insert({postid: postid, like: 1, userid: userid});
  } catch (error) {
    // console.log("Error", error)
  }
};

const updateLikes = async ({postid, userid, likeCount}: any) => {
  try {
    const {error} = await supabase
      .from('postLike')
      .update({postid: postid, like: likeCount, userid: userid})
      .eq('postid', postid);
  } catch (error) {
    // console.log('Error', error);
  }
};

export {getLikes, addLikes, updateLikes};
