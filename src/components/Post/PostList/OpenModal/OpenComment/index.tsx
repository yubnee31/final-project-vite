import React, {useState} from 'react';
import St from './style';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addComment, deleteComment, getComments} from '../../../../../api/postComment';
import seeMoreImg from '../../../../../assets/images/meatballs-v.svg';
import profileImg from '../../../../../assets/images/profile-white.png';
import commentImg from '../../../../../assets/images/comment-white.png';
import heartImgPurple from '../../../../../assets/images/heart-purple.png';
import heartImgWhite from '../../../../../assets/images/heart-white.png';
import dayjs from 'dayjs';

const OpenComment = ({currentUser, modalData, nameFilterHandler, target, targetPost, onClickLikeHandler}: any) => {
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

  const handleChangeAddComment: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
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

  return (
    <St.CommentWrap>
      <St.CommentTitle>게시된 글</St.CommentTitle>
      <St.ContentBox>
        <St.CommentHeader>
          <St.CommentProfile src={profileImg} />
          <St.CommentUserNameP>{nameFilterHandler(modalData.userid)}</St.CommentUserNameP>
          <St.CommentDataDiv>
            <St.CommentTimeP>{dayjs(modalData.created_at).format('HH:mm')}</St.CommentTimeP>
            <St.CommentDateP>{dayjs(modalData.created_at).format('YYYY.MM.DD')}</St.CommentDateP>
          </St.CommentDataDiv>
        </St.CommentHeader>
        <St.ContentP>{modalData.content}</St.ContentP>
        <St.ContentBtnsDiv>
          <St.heartCommentBtnDiv>
            <St.OpenContentModalLikeBtnDiv>
              <St.OpenContentModalLikeImg
                src={target?.length ? heartImgPurple : heartImgWhite}
                onClick={onClickLikeHandler}
              ></St.OpenContentModalLikeImg>
              <St.OpenContentModalLikeCountP>{targetPost?.like}</St.OpenContentModalLikeCountP>
            </St.OpenContentModalLikeBtnDiv>
            <St.ContentModalReplyImgDiv>
              <St.ComentReplyImg src={commentImg} />
            </St.ContentModalReplyImgDiv>
          </St.heartCommentBtnDiv>
          <St.moreBtnImg src={seeMoreImg} />
        </St.ContentBtnsDiv>
      </St.ContentBox>
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
                  <St.CommentProfile src={profileImg} />
                  <St.CommentUserNameP>{nameFilterHandler(el.userid)}</St.CommentUserNameP>
                  <St.CommentDataDiv>
                    <St.CommentTimeP>{dayjs(el.created_at).format('HH:mm')}</St.CommentTimeP>
                    <St.CommentDateP>{dayjs(el.created_at).format('YYYY.MM.DD')}</St.CommentDateP>
                  </St.CommentDataDiv>
                </St.CommentHeader>
                <St.CommentP>{el.comment}</St.CommentP>
                <St.ConmmentBtnDiv>
                  {el.userid === currentUser.id && (
                    <St.CommentDeleteaBtn
                      onClick={() => {
                        deleteMutation.mutate(el.commentid);
                      }}
                    >
                      삭제
                    </St.CommentDeleteaBtn>
                  )}
                  <St.moreBtnImg src={seeMoreImg} />
                </St.ConmmentBtnDiv>
              </St.CommentLi>
            );
          })}
      </St.CommentUl>
      <St.CommentAddForm>
        <St.CommenAddProfile src={profileImg} />
        <St.CommentInput
          value={comment}
          placeholder="댓글을 입력해주세요"
          maxlength="60"
          onChange={handleChangeAddComment}
        />
        <St.CommentAddBtn onClick={handleSubmitAddComment}>게시</St.CommentAddBtn>
      </St.CommentAddForm>
    </St.CommentWrap>
  );
};

export default OpenComment;
