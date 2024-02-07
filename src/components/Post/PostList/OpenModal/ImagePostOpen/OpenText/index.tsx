import React from 'react';
import St from './style';
import profileImg from '../../../../../../assets/images/profile-white.png';
import commentImg from '../../../../../../assets/images/comment-white.png';
import heartImgPurple from '../../../../../../assets/images/heart-purple.png';
import heartImgWhite from '../../../../../../assets/images/heart-white.png';
import closeImg from '../../../../../../assets/images/close.png';
import dayjs from 'dayjs';
import CommentLike from '../../CommentLike';
import {useQuery} from '@tanstack/react-query';
import {getTargetUserInfo} from '../../../../../../api/currentUser';

const OpenText = ({
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
    <St.OpenTextWrap>
      <St.OpenTextTitleCloseDiv>
        <St.OpenTextTitle>게시된 글</St.OpenTextTitle>
        <St.OpenTextCloseImg src={closeImg} onClick={handleModal} />
      </St.OpenTextTitleCloseDiv>
      {/* 게시글 */}
      <St.OpenTextBox>
        <St.OpenTextContentHeader>
          <St.OpenTextUserInfo>
            <St.OpenTextUserImg src={profileImg} />
            <St.OpenTextUserName>{nameFilterHandler(modalData.userid)}</St.OpenTextUserName>
          </St.OpenTextUserInfo>
          <St.OpenTextTimeDateDiv>
            <St.OpenTextTimeP>{dayjs(modalData.created_at).format('HH:mm')}</St.OpenTextTimeP>
            <St.OpenTextDateP>{dayjs(modalData.created_at).format('YYYY.MM.DD')}</St.OpenTextDateP>
          </St.OpenTextTimeDateDiv>
        </St.OpenTextContentHeader>
        <St.OpenTextContentP>{modalData.content}</St.OpenTextContentP>
        <St.OpenTextImgsDiv>
          <St.OpenTextLikeBtnDiv>
            <St.OpenTextLikeImg
              src={target?.length ? heartImgPurple : heartImgWhite}
              onClick={onClickLikeHandler}
            ></St.OpenTextLikeImg>
            <St.OpenTextLikeCountP>{targetPost?.like}</St.OpenTextLikeCountP>
          </St.OpenTextLikeBtnDiv>
          <St.OpenTextCommentDiv>
            <St.OpenTextCommentImg src={commentImg} />
          </St.OpenTextCommentDiv>
        </St.OpenTextImgsDiv>
      </St.OpenTextBox>

      {/* 댓글 */}
      <St.OpenTextCommentUl>
        {comments
          ?.filter(e => e.postid === modalData.id)
          ?.sort((a, b) => {
            const aDate: any = new Date(a.created_at);
            const bDate: any = new Date(b.created_at);
            return bDate - aDate;
          })
          .map((el: any) => {
            return (
              <St.OpenTextCommentLi key={el.id}>
                <St.OpenTextContentHeader>
                  <St.OpenTextUserInfo>
                    <St.OpenTextUserImg src={profileImg} />
                    <St.OpenTextUserName>{commentNameFilterHandler(el.userid)}</St.OpenTextUserName>
                  </St.OpenTextUserInfo>
                  <St.OpenTextTimeDateDiv>
                    <St.OpenTextTimeP>{dayjs(el.created_at).format('HH:mm')}</St.OpenTextTimeP>
                    <St.OpenTextDateP>{dayjs(el.created_at).format('YYYY.MM.DD')}</St.OpenTextDateP>
                  </St.OpenTextTimeDateDiv>
                </St.OpenTextContentHeader>
                <St.OpenTextCommentP>{el.comment}</St.OpenTextCommentP>
                <St.OpenTextCommentImgsDiv>
                  <CommentLike commentId={el.commentid} currentUser={currentUser} />
                  {el.userid === currentUser.id && (
                    <St.CommentDeleteaBtn
                      onClick={() => {
                        deleteMutation.mutate(el.commentid);
                      }}
                    >
                      삭제
                    </St.CommentDeleteaBtn>
                  )}
                </St.OpenTextCommentImgsDiv>
              </St.OpenTextCommentLi>
            );
          })}
      </St.OpenTextCommentUl>
      <St.OpenTextAddCommentForm>
        <St.OpenTextAddCommentUserImg src={profileImg} />
        <St.OpenTextAddCommentTextarea
          value={comment}
          placeholder="댓글을 입력해주세요. 최대 60글자까지 입력 가능합니다."
          maxlength="60"
          onChange={handleChangeAddComment}
        />
        <St.OpenTextAddCommentBtn disabled={!comment} onClick={handleSubmitAddComment}>
          게시
        </St.OpenTextAddCommentBtn>
      </St.OpenTextAddCommentForm>
    </St.OpenTextWrap>
  );
};

export default OpenText;
