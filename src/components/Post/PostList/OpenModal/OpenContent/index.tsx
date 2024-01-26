import React from 'react';
import St from './style';
import {useMutation, useQueryClient, useQuery} from '@tanstack/react-query';
import {updateLikes} from '../../../../../api/like';
import heartImgPurple from '../../../../../assets/images/heart-purple.png';
import heartImgWhite from '../../../../../assets/images/heart-white.png';
import {getPosts} from '../../../../../api/post';
import {getTargetUserInfo} from '../../../../../api/currentUser';

const OpenContent = ({currentUser, modalData}: any) => {
  const queryClient = useQueryClient();

  const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getTargetUserInfo,
  });

  const {data: posts, isLoading} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  const targetPost = posts?.find(e => e.id === modalData.id);

  const likeMutation = useMutation({
    mutationFn: updateLikes,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });
  console.log('modalData', modalData.id);
  const target = targetPost?.like_userInfo?.filter(e => e.id === currentUser.id);

  const onClickLikeHandler = () => {
    if (target.length) {
      const likeCounter = targetPost?.like - 1;
      const postInfoData = targetPost?.like_userInfo.filter(e => e.id !== currentUser.id);
      const param = {id: modalData.id, likeUserInfo: postInfoData, likeCount: likeCounter};
      likeMutation.mutate(param);
    } else {
      const likeCounter = targetPost?.like + 1;
      targetPost?.like_userInfo.push({id: currentUser.id});
      const param = {id: targetPost?.id, likeUserInfo: targetPost?.like_userInfo, likeCount: likeCounter};
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
          src={target.length ? heartImgPurple : heartImgWhite}
          onClick={onClickLikeHandler}
        ></St.OpenContentModalLikeImg>
        <St.OpenContentModalLikeCountP>{targetPost?.like}</St.OpenContentModalLikeCountP>
      </St.OpenContentMocalLikeBtnDiv>
    </St.OpenContentModalContainer>
  );
};

export default OpenContent;
