import React from 'react';
import St from './style';
import {useMutation, useQueryClient, useQuery} from '@tanstack/react-query';
import {addLikes, getLikes, updateLikes} from '../../../../../api/like';
import heartImgPurple from '../../../../../assets/images/heart-purple.png';
import heartImgWhite from '../../../../../assets/images/heart-white.png';
import {getTargetUserInfo} from '../../../../../api/currentUser';

const OpenContent = ({currentUser, modalData}: any) => {
  const queryClient = useQueryClient();

  const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getTargetUserInfo,
  });

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

  console.log('modalData', modalData.id);
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

  const nameFilterHandler = id => {
    const target = userInfo?.find(e => e.id === id);
    return target?.username;
  };

  return (
    <St.OpenContentModalContainer>
      <St.OpenContentModalUserName>{nameFilterHandler(modalData.userid)}</St.OpenContentModalUserName>
      <div>
        <St.OpenContentModalContent>{modalData.content}</St.OpenContentModalContent>
        <St.OpenContentModalImg alt="게시글 사진" />
      </div>
      <St.OpenContentMocalLikeBtnDiv>
        <St.OpenContentModalLikeImg
          src={target?.length ? heartImgPurple : heartImgWhite}
          onClick={onClickLikeHandler}
        ></St.OpenContentModalLikeImg>
        <St.OpenContentModalLikeCountP>{targetPost?.like}</St.OpenContentModalLikeCountP>
      </St.OpenContentMocalLikeBtnDiv>
    </St.OpenContentModalContainer>
  );
};

export default OpenContent;
