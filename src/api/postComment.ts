import {supabase} from './supabase';

type COMMENT = {
  postid?: string;
  commentid?: string;
  userid?: string;
  comment?: string;
  re_comment?: string;
  isEditing?: boolean;
  created_at?: string;
};

type newComment = Omit<COMMENT, 'id' | 'createdAt'>;

//등록된 댓글 목록 가져오기
const getComments = async () => {
  try {
    const {data, error} = await supabase.from('postComments').select('*');
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
};

// 댓글 등록
const addComment = async (newComment: newComment) => {
  try {
    const {error} = await supabase.from('postComment').insert(newComment);
  } catch (error) {
    console.log('Error', error);
  }
};

// 댓글 삭제
const deleteComment = async (commentid: string) => {
  try {
    await supabase.from('postComment').delete().eq('commentid', commentid);
  } catch (error) {
    console.log('Error', error);
  }
};

// 댓글 수정
const updateComment = async ({commentid, comment}: COMMENT) => {
  try {
    const {error} = await supabase
      .from('postComment')
      .update({comment: comment, isEditing: false})
      .eq('commentid', commentid);
  } catch (error) {
    console.log('Error', error);
  }
};

export {getComments, addComment, deleteComment, updateComment};
