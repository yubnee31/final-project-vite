import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {loginState} from '../../shared/recoil/authAtom';
import {artistFollowList, getInitialLikes, getUsers} from '../../api/chartapi';
import {getArtistList} from '../../api/artistapi';
import {supabase} from '../../api/supabase';
import {from} from 'stylis';

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

  const {data: currentUser} = useQuery({
    queryKey: ['userinfo', postId],
    queryFn: () => (postId ? getUsers(postId) : null),
  });

  const {data: artistList} = useQuery({
    queryKey: ['artists'],
    queryFn: getArtistList,
  });
  const targetData = artistList?.find(el => el.artist === artistId);

  //팔로우 된 인원을 보여주는 데이터를 가지고 온다.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCountData = async () => {
    try {
      const {data} = await supabase.from('artists').select('artist_fw_count').eq('artist', artistId);
      setFollowCount(data[0].artist_fw_count);
    } catch (error) {
      console.log('팔로우 수 카운트 불러오기 실패', error);
    }
  };
  const [followCount, setFollowCount] = useState<number | null>(null);

  useEffect(() => {
    fetchCountData();
  }, [fetchCountData]);

  //현재 유저가 팔로우 했었는지 안했었는지 데이터를 가져온다.
  useEffect(() => {
    if (currentUser && targetData) {
      const isFollowing = currentUser.artist_follow?.some(
        followData => followData.artistId.artist === targetData?.artist,
      );
      // 팔로우 상태 토글
      setFollowed(isFollowing);
    }
  }, [currentUser, targetData]);

  const {mutate} = useMutation<void, Error, void, unknown>({
    mutationFn: async () => {
      // 팔로우 또는 언팔로우 시 artistFollowList 호출하도록 수정
      await artistFollowList({artistId: targetData});

      // // //팔로우 카운트에서 다시 팔로우 수를 가져오려고할떄  artist 오류가 생긴다.
      // const updatedFollowCount = await getInitialLikes(postId);
      // setFollowCount(updatedFollowCount);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({queryKey: ['artists']});
      queryClient.invalidateQueries({queryKey: ['userinfo']});
      // 팔로우 상태 토글
      setFollowed(!followed);
    },
    onError: async context => {
      const previousData = context || {};
      queryClient.setQueryData(['artists'], previousData);
      queryClient.setQueryData(['userinfo'], previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['artists']});
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
      {followCount !== null && <p>{followCount} 명이 팔로우 했습니다.</p>}
    </>
  );
};

export default FollowArtistBt;
