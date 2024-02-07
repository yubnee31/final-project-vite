import React from 'react';
import St from './style';
import dayjs from 'dayjs';
import heartImgPurple from '../../../../../assets/images/heart-purple.png';
import heartImgWhite from '../../../../../assets/images/heart-white.png';
import profileImg from '../../../../../assets/images/profile-white.png';
import commentImg from '../../../../../assets/images/comment-white.png';
import closeImg from '../../../../../assets/images/close.png';
import CommentLike from '../CommentLike';
import {useQuery} from '@tanstack/react-query';
import {getTargetUserInfo} from '../../../../../api/currentUser';

const OnlyTextOpenPost = ({
  currentUser,
  nameFilterHandler,
  modalData,
  target,
  targetPost,
  onClickLikeHandler,
  comments,
  deleteMutation,
  comment,
  handleChangeAddComment,
  handleSubmitAddComment,
  handleModal,
}: any) => {
  const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getTargetUserInfo,
  });

  const commentNameFilterHandler = id => {
    const target = userInfo?.find(e => e.id === id);
    return target?.username;
  };

  return (
    <>
      <St.OnlyTextTitleCloseDiv>
        <St.OnlyTextTitle>게시된 글</St.OnlyTextTitle>
        <St.OnlyTextCloseImg src={closeImg} onClick={handleModal} />
      </St.OnlyTextTitleCloseDiv>
      <St.OnlyTextContentDiv>
        <St.OnlyTextHeader>
          <St.OnlyTextUserInfo>
            <St.OnlyTextUserImg src={profileImg} />
            <St.OnlyTextUserName>{nameFilterHandler(modalData.userid)}</St.OnlyTextUserName>
          </St.OnlyTextUserInfo>
          <St.OnlyTextDateTimeDiv>
            <St.OnlyTextTime>{dayjs(modalData.created_at).format('HH:mm')}</St.OnlyTextTime>
            <St.OnlyTextDate>{dayjs(modalData.created_at).format('YYYY.MM.DD')}</St.OnlyTextDate>
          </St.OnlyTextDateTimeDiv>
        </St.OnlyTextHeader>
        <St.OnlyTextContentP>{modalData.content}</St.OnlyTextContentP>
        <St.OnlyTextBtnImgDiv>
          <St.OnlyTextHeartCommentBtnDiv>
            <St.OnlyTextHeartImgDiv>
              <St.OnlyTextHeartImg src={target?.length ? heartImgPurple : heartImgWhite} onClick={onClickLikeHandler} />
              <St.OnlyTextHeartCountP>{targetPost?.like}</St.OnlyTextHeartCountP>
            </St.OnlyTextHeartImgDiv>
            <St.OnlyTextContentCommentImg src={commentImg} />
          </St.OnlyTextHeartCommentBtnDiv>
        </St.OnlyTextBtnImgDiv>
      </St.OnlyTextContentDiv>

      {/* 댓글 */}
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
                <St.OnlyTextHeader>
                  <St.OnlyTextUserInfo>
                    <St.OnlyTextUserImg src={profileImg} />
                    <St.OnlyTextUserName>{commentNameFilterHandler(el.userid)}</St.OnlyTextUserName>
                  </St.OnlyTextUserInfo>
                  <St.OnlyTextDateTimeDiv>
                    <St.OnlyTextTime>{dayjs(el.created_at).format('HH:mm')}</St.OnlyTextTime>
                    <St.OnlyTextDate>{dayjs(el.created_at).format('YYYY.MM.DD')}</St.OnlyTextDate>
                  </St.OnlyTextDateTimeDiv>
                </St.OnlyTextHeader>
                <St.CommentP>{el.comment}</St.CommentP>
                <St.OnlyTextBtnImgDiv>
                  <CommentLike commentId={el.commentid} currentUser={currentUser} />
                  {el.userid === currentUser.id && (
                    <St.OnlyTextDeleteBtn
                      onClick={() => {
                        deleteMutation.mutate(el.commentid);
                      }}
                    >
                      삭제
                    </St.OnlyTextDeleteBtn>
                  )}
                </St.OnlyTextBtnImgDiv>
              </St.CommentLi>
            );
          })}
      </St.CommentUl>
      <St.AddCommentDiv onSubmit={handleSubmitAddComment}>
        <St.AddCommentUserImg src={profileImg} />
        <St.AddCommentInput
          type="text"
          value={comment}
          placeholder="댓글을 입력해주세요. 최대 60글자까지 입력 가능합니다."
          maxlength="60"
          onChange={handleChangeAddComment}
        />
        <St.AddCommentBtn disabled={!comment}>게시</St.AddCommentBtn>
      </St.AddCommentDiv>
    </>
  );
};

export default OnlyTextOpenPost;
