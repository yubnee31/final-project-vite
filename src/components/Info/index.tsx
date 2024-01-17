import React from 'react'
import St from './style'
import { getCurrentUser } from '../../api/currentUser';
import { useQuery } from '@tanstack/react-query';

const Info = () => {
  const {data: currentUser} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });
  console.log('post CurrentUser', currentUser);


  return (
    <>
        <St.BannerDiv>
          <St.BannerImg src="https://cdnimg.melon.co.kr/cm2/photo/images/000/802/42/594/80242594_20240111161428_org.jpg/melon/quality/80/optimize" />
        </St.BannerDiv>
        <St.InfoDiv>
          <St.InfoNameDiv>
            <St.InfoNameP>{currentUser?.user_metadata.name}</St.InfoNameP>
            <St.InfoNameBtn>프로필 변경하기</St.InfoNameBtn>
          </St.InfoNameDiv>
          <St.InfoFollowerDiv>
            <St.InfoFollowP>109</St.InfoFollowP>
            <St.FollowP>팔로워</St.FollowP>
          </St.InfoFollowerDiv>
          <St.InfoFollowingDiv>
            <St.InfoFollowP>20</St.InfoFollowP>
            <St.FollowP>팔로잉</St.FollowP>
          </St.InfoFollowingDiv>
          <St.InfoArtistDiv>
            {/* <StInfoArtistImg src={toArtistTestImg}/> */}
            <St.InfoArtistP>아티스트 보러가기</St.InfoArtistP>
          </St.InfoArtistDiv>
        </St.InfoDiv>
    </>
  )
}

export default Info