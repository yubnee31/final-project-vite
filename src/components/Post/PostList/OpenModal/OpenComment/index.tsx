import React, {useState} from 'react';
import St from './style';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import {getCurrentUser} from '../../../../../api/currentUser';
import {addComment, getComments} from '../../../../../api/postComment';
import {getPosts} from '../../../../../api/post';

const OpenComment = () => {
  const queryClient = useQueryClient();
  const param = useParams();
  const [comment, setComment] = useState('');

  // current UserInfo
  const {data: currentUser} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });

  // post list
  const {data: posts, isLoading} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  const {data: comments} = useQuery({
    queryKey: ['postComments'],
    queryFn: getComments,
  });

  const currentPostId = posts?.filter(post => post.id === comments?.postid);
  console.log(comment?.postid);

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
    // const param: {id};
    const newComments = {
      postid: '게시글 아이디',
      userid: currentUser?.user_metadata.name,
      comment: comment,
      re_comment: '나중에 추가',
    };
    addMutation.mutate(newComments);
    setComment('');
  };

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
        .map(comment => {
          return (
            <>
              <p>{comment.userid}</p>
              <p>{comment.comment}</p>
              <p>{comment.create_at}</p>
            </>
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
