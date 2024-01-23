import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import St from './style';
import {addLikeartist} from '../../../../api/chartapi';
import heartUmg from '../../../../assets/images/heart-white.png';

const PostLike = ({postLike, currentUser}) => {
  const queryClient = useQueryClient();
  const addLikeMutate = useMutation({
    mutationFn: async () => {
      await addLikeartist(postLike);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
    onError: context => {
      const previousData = context || {};
      queryClient.setQueryData(['posts'], previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });

  const handleLikeToggle = () => {
    if (currentUser) {
      addLikeMutate;
    }
  };

  return (
    <>
      <St.LikeBtnImg onClick={handleLikeToggle} src={heartUmg} $left={'1%'} />
      {/* <button onClick={handleLikeToggle}>좋아요</button> */}
    </>
  );
};

export default PostLike;
