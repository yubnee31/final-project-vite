import React, {useState} from 'react';
import St from './style';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addComment, deleteComment, getComments} from '../../../../../api/postComment';
import dayjs from 'dayjs';

const OpenComment = ({currentUser}: any) => {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState('');

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
      postid: 'postId',
      username: currentUser?.user_metadata.name,
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

  return (
    <St.CommentContent>
      <div>댓글창</div>
      <div>댓글 리스트</div>
      {comments
        ?.sort((a, b) => {
          const aDate: any = new Date(a.created_at);
          const bDate: any = new Date(b.created_at);
          return bDate - aDate;
        })
        .map(el => {
          return (
            <div key={el.id}>
              <p>{el.userid}</p>
              <p>{el.comment}</p>
              <p>{dayjs(el.created_at).format('YYYY.MM.DD')}</p>
              <button
                onClick={() => {
                  deleteMutation.mutate(el.commentid);
                }}
              >
                삭제
              </button>
              <button>수정</button>
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
