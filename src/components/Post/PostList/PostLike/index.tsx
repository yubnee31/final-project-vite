import {useMutation, useQueryClient} from '@tanstack/react-query';
import React, {useState} from 'react';
import St from './style';
import {updateLikes} from '../../../../api/like';
import heartImgWhite from '../../../../assets/images/heart-white.png';
import heartImgPurple from '../../../../assets/images/heart-purple.png';

const PostLike = ({postId, currentUser, postlike, postInfo}: any) => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: updateLikes,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });

  const [liked, setLiked] = useState(false);

  const userInfo = {id: currentUser.id};

  const onClickLikeHandler = () => {
    const target = postInfo?.filter(e => e.id === currentUser.id);
    if (target.length) {
      const likeCounter = postlike - 1;
      const postInfoData = postInfo.filter(e => e.id !== userInfo.id);
      const param = {id: postId, likeUserInfo: postInfoData, likeCount: likeCounter};
      likeMutation.mutate(param);
      setLiked(false);
    } else {
      const likeCounter = postlike + 1;
      postInfo.push(userInfo);
      const param = {id: postId, likeUserInfo: postInfo, likeCount: likeCounter};
      likeMutation.mutate(param);
      setLiked(true);
    }
  };

  return (
    <St.LikeBtnDiv>
      <St.LikeBtnImg src={liked ? heartImgPurple : heartImgWhite} onClick={onClickLikeHandler} />
      <St.LikeCountP>{postlike}</St.LikeCountP>
    </St.LikeBtnDiv>
  );
};

export default PostLike;
