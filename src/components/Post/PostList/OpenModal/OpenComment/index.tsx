import React, {useState} from 'react';
import St from './style';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addComment, deleteComment, getComments} from '../../../../../api/postComment';
import {getTargetUserInfo} from '../../../../../api/currentUser';
import seeMoreImg from '../../../../../assets/images/meatballs-v.svg';
import dayjs from 'dayjs';

const OpenComment = ({currentUser, modalData}: any) => {
  // toggle
  const [openToggle, setOpenToggle] = useState(false);
  const handleToggle = () => {
    setOpenToggle(!openToggle);
  };

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
    <St.CommentWrap>
      <St.CommentTitle>댓글</St.CommentTitle>
      <St.CommentUl>
        {comments
          ?.filter(e => e.postid === modalData.id)
          ?.sort((a, b) => {
            const aDate: any = new Date(a.created_at);
            const bDate: any = new Date(b.created_at);
            return bDate - aDate;
          })
          .map(el => {
            return (
              <St.CommentLi key={el.id}>
                <St.CommentHeader>
                  <St.CommentUserNameP>{nameFilterHandler(el.userid)}</St.CommentUserNameP>
                  <St.CommentDeleteaBtn
                    onClick={() => {
                      deleteMutation.mutate(el.commentid);
                    }}
                  >
                    삭제
                  </St.CommentDeleteaBtn>
                </St.CommentHeader>
                <St.CommentP>{el.comment}</St.CommentP>
                <St.CommentDataDiv>
                  <St.CommentDateP>{dayjs(el.created_at).format('YYYY.MM.DD')}</St.CommentDateP>
                  <St.CommentTimeP>{dayjs(el.created_at).format('HH:mm')}</St.CommentTimeP>
                </St.CommentDataDiv>
              </St.CommentLi>
            );
          })}
      </St.CommentUl>
      <St.CommentAddForm onSubmit={handleSubmitAddComment}>
        <St.CommentInput
          type="text"
          value={comment}
          placeholder="댓글을 입력해주세요"
          onChange={handleChangeAddComment}
        />
        <St.CommentAddBtn> 추가</St.CommentAddBtn>
      </St.CommentAddForm>
    </St.CommentWrap>
  );
};

export default OpenComment;
