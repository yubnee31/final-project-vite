import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {loginState} from '../../shared/recoil/authAtom';
import {artistFollowList} from '../../api/chartapi';

interface FollowArtistProps {
  postId: number;
}

const FollowArtistBt = ({postId}: FollowArtistProps) => {
  const queryClient = useQueryClient();
  const loginInfo = useRecoilValue(loginState);
  const {mutate} = useMutation<void, Error, void, unknown>({
    mutationFn: async () => {
      await artistFollowList(postId);
      queryClient.invalidateQueries({queryKey: ['testTable']});
      queryClient.invalidateQueries({queryKey: ['userInfo']});
    },
    onSuccess: async () => {},
    onError: async () => {},
    onSettled: () => {},
  });
  const handleFollowToggle = () => {
    mutate();
  };
  return (
    <>
      <button onClick={handleFollowToggle}>팔로우</button>
    </>
  );
};

export default FollowArtistBt;
