import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {loginState} from '../../shared/recoil/authAtom';
import {artistFollowList, getInitialLikes, getUsers} from '../../api/chartapi';
import {getArtistList} from '../../api/artistapi';

interface FollowArtistProps {
  children: React.ReactNode;
  postId: number;
  artistId: string;
}

const FollowArtistBt = ({postId, artistId}: FollowArtistProps) => {
  const queryClient = useQueryClient();
  const loginInfo = useRecoilValue(loginState);
  // followed 상태를 추적하는 상태 변수 추가
  const [followed, setFollowed] = useState(false);
  const [followCount, setFollowCount] = useState(0);
  const {data: currentUser} = useQuery({
    queryKey: ['userinfo', postId],
    queryFn: () => (postId ? getUsers(postId) : null),
  });

  const {data: artistList} = useQuery({
    queryKey: ['schedule'],
    queryFn: getArtistList,
  });
  const targetData = artistList?.find(el => el.artist === artistId);
  useEffect(() => {
    if (currentUser && targetData) {
      const isFollowing = currentUser.artist_follow?.some(
        followData => followData.artistId.artist === targetData.artist,
      );

      // 팔로우 상태 토글
      setFollowed(isFollowing);
    }
  }, [currentUser, targetData]);

  const {mutate} = useMutation<void, Error, void, unknown>({
    mutationFn: async () => {
      // 팔로우 또는 언팔로우 시 artistFollowList 호출하도록 수정
      await artistFollowList({artistId: targetData}, postId);
      // await getInitialLikes(postId);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({queryKey: ['testTable']});
      queryClient.invalidateQueries({queryKey: ['userinfo']});
      // 팔로우 상태 토글
      setFollowed(!followed);
    },
    onError: async context => {
      const previousData = context || {};
      queryClient.setQueryData(['testTable'], previousData);
      queryClient.setQueryData(['userinfo'], previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['testTable']});
      queryClient.invalidateQueries({queryKey: ['userinfo']});
    },
  });

  const handleFollowToggle = () => {
    if (loginInfo) {
      mutate();
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  return (
    <>
      <button onClick={handleFollowToggle}>{followed ? '팔로우 끊기' : '팔로우 하기'}</button>
      <p>{followCount} 명이 팔로우 했습니다.</p>
    </>
  );
};

export default FollowArtistBt;
