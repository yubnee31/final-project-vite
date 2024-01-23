import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {addLikeartist} from '../../../../api/chartapi';

interface LikeButtonProps {
  postLike: number;
}
const PostLike = ({postLike}: LikeButtonProps) => {
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
  return <></>;
};

export default PostLike;
