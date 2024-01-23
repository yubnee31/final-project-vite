import {UseMutationOptions, useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import St from './style';
import heartUmg from '../../../../assets/images/heart-white.png';
import {addLikePost} from '../../../../api/post';

interface postLike {
  Id: number;
}
const PostLike = ({postLike, currentUser}) => {
  const queryClient = useQueryClient();
  const {mutate} = useMutation<void, Error, void, unknown>({
    mutationFn: async () => {
      await addLikePost(postLike);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
    onError: context => {
      const previousData = context || {};
      queryClient.setQueryData(['posts'], previousData);
    },
    onSettled: async () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  } as UseMutationOptions<void, Error, void, unknown>);

  const handleLikeToggle = () => {
    if (currentUser) {
      mutate();
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
