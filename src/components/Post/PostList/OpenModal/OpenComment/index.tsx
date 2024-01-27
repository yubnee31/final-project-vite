import React, {useState} from 'react';
import St from './style';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addComment, deleteComment, getComments} from '../../../../../api/postComment';
import {getTargetUserInfo} from '../../../../../api/currentUser';
import dayjs from 'dayjs';

const OpenComment = ({currentUser, modalData}: any) => {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState('');
  const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getTargetUserInfo,
  });

  // 댓글 list
  const {data: comments} = useQuery({
    queryKey: ['postComments'],
    queryFn: getComments,
  });

  // 댓글 추가
  const addMutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postComments']});
    },
  });

  const handleChangeAddComment: React.ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleSubmitAddComment: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const newComment = {
      postid: modalData.id,
      userid: currentUser?.id,
      comment: comment,
    };

    addMutation.mutate(newComment);
    setComment('');
  };

  // 댓글 삭제
  const deleteMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postComments']});
    },
  });

  const nameFilterHandler = id => {
    const target = userInfo?.find(e => e.id === id);
    return target?.username;
  };

  return (
    <St.CommentContent>
      {comments
        ?.filter(e => e.postid === modalData.id)
        ?.sort((a, b) => {
          const aDate: any = new Date(a.created_at);
          const bDate: any = new Date(b.created_at);
          return bDate - aDate;
        })
        .map(el => {
          return (
            <div key={el.id}>
              <p>{nameFilterHandler(el.userid)}</p>
              <p>{el.comment}</p>
              <p $right={'14%'}>{dayjs(post.created_at).format('HH:mm')}</p>
              <p>{dayjs(el.created_at).format('YYYY.MM.DD')}</p>
              <button
                onClick={() => {
                  deleteMutation.mutate(el.commentid);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      <form onSubmit={handleSubmitAddComment}>
        <input type="text" value={comment} placeholder="댓글 입력" onChange={handleChangeAddComment} />
        <button> 추가</button>
      </form>
    </St.CommentContent>
  );
};

export default OpenComment;
