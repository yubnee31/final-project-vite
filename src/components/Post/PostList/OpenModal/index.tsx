import React, {useState} from 'react';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import St from './style';
import OpenContent from './OpenContent';
import OpenComment from './OpenComment';
import {getTargetUserInfo} from '../../../../api/currentUser';
import dayjs from 'dayjs';
import heartImgPurple from '../../../../assets/images/heart-purple.png';
import heartImgWhite from '../../../../assets/images/heart-white.png';
import profileImg from '../../../../assets/images/profile-white.png';
import commentImg from '../../../../assets/images/comment-white.png';
import {addLikes, getLikes, updateLikes} from '../../../../api/like';
import {addComment} from '../../../../api/postComment';

const OpenPostModal = ({handleModal, currentUser, modalData}: any) => {
  const queryClient = useQueryClient();

  const [comment, setComment] = useState('');

  const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getTargetUserInfo,
  });

  const nameFilterHandler = id => {
    const target = userInfo?.find(e => e.id === id);
    return target?.username;
  };

  //좋아요
  const {data: postLike} = useQuery({
    queryKey: ['postLike'],
    queryFn: getLikes,
  });

  const addLikeMutation = useMutation({
    mutationFn: addLikes,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postLike']});
    },
  });

  const likeMutation = useMutation({
    mutationFn: updateLikes,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postLike']});
    },
  });

  const targetPost = postLike?.find(e => e.postid === modalData.id);
  const target = targetPost?.userid?.filter(e => e.id === currentUser.id);

  const onClickLikeHandler = () => {
    if (targetPost === undefined) {
      const param = {postid: modalData.id, userid: [{id: currentUser.id}]};
      addLikeMutation.mutate(param);
    } else if (target?.length) {
      const likeCounter = targetPost.like - 1;
      const postInfoData = targetPost.userid.filter(e => e.id !== currentUser.id);
      const param = {postid: modalData.id, userid: postInfoData, likeCount: likeCounter};
      likeMutation.mutate(param);
    } else {
      const likeCounter = targetPost.like + 1;
      targetPost.userid.push({id: currentUser.id});
      const param = {postid: modalData.id, userid: targetPost.userid, likeCount: likeCounter};
      likeMutation.mutate(param);
    }
  };

  // add comment
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

  const handleSubmitAddComment: React.MouseEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const newComment = {
      postid: modalData.id,
      userid: currentUser?.id,
      comment: comment,
    };

    addMutation.mutate(newComment);
    setComment('');
  };

  return (
    <>
      <St.OpenPostModalContainer onClick={handleModal}>
        <St.OpenPostModalBox
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {modalData.photo_url.length ? (
            <St.OpenPostModalContent>
              <OpenContent currentUser={currentUser} modalData={modalData} />
              <OpenComment
                currentUser={currentUser}
                modalData={modalData}
                nameFilterHandler={nameFilterHandler}
                target={target}
                targetPost={targetPost}
                onClickLikeHandler={onClickLikeHandler}
              />
            </St.OpenPostModalContent>
          ) : (
            <>
              <St.OnlyTextTitle>게시된 글</St.OnlyTextTitle>
              <St.OnlyTextContentDiv>
                <St.OnlyTextContentHeader>
                  <St.OnlyTextContentUserInfo>
                    <St.OnlyTextContentUserImg src={profileImg} />
                    <St.OnlyTextContentUserName>{nameFilterHandler(modalData.userid)}</St.OnlyTextContentUserName>
                  </St.OnlyTextContentUserInfo>
                  <St.OnlyTextContentDateTimeDiv>
                    <St.OnlyTextContentTime>{dayjs(modalData.created_at).format('HH:mm')}</St.OnlyTextContentTime>
                    <St.OnlyTextContentDate>{dayjs(modalData.created_at).format('YYYY.MM.DD')}</St.OnlyTextContentDate>
                  </St.OnlyTextContentDateTimeDiv>
                </St.OnlyTextContentHeader>
                <St.OnlyTextContentP>{modalData.content}</St.OnlyTextContentP>
                <St.OnlyTextContentBtnImgDiv>
                  <St.OnlyTextContentHeartImgDiv>
                    <St.OnlyTextContentHeartImg
                      src={target?.length ? heartImgPurple : heartImgWhite}
                      onClick={onClickLikeHandler}
                    />
                    <St.OnlyTextContentHeartCountP>{targetPost?.like}</St.OnlyTextContentHeartCountP>
                  </St.OnlyTextContentHeartImgDiv>
                  <St.OnlyTextContentCommentImg src={commentImg} />
                </St.OnlyTextContentBtnImgDiv>
              </St.OnlyTextContentDiv>
              <St.CommentDiv>
                <>유저 이미지</>
                <p>닉네임</p>
                <p>시간</p>
                <p>날짜</p>
                <p>내용</p>
              </St.CommentDiv>
              <St.AddCommentDiv onSubmit={handleSubmitAddComment}>
                <St.AddCommentImg src={profileImg} />
                <St.AddCommentTextArea
                  value={comment}
                  placeholder="댓글을 입력해주세요"
                  maxlength="60"
                  onChange={handleChangeAddComment}
                />
              </St.AddCommentDiv>
              <button>게시</button>
            </>
          )}
        </St.OpenPostModalBox>
      </St.OpenPostModalContainer>
    </>
  );
};

export default OpenPostModal;
