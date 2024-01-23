import React from 'react';
import St from './style';
import {getCurrentUser} from '../../api/currentUser';
import {useQuery} from '@tanstack/react-query';
import {getArtistDetail} from '../../api/artistapi';
import {useNavigate} from 'react-router-dom';
import Spinner from '../Common/Spinner';

const Info = ({param}: string) => {
  const navigate = useNavigate();

  const {data: currentUser} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });

  const {data: artistDetail, isLoading} = useQuery({
    queryKey: [''],
    queryFn: getArtistDetail,
  });
<<<<<<< HEAD

=======
>>>>>>> 3ca13a344e20ba4446f761ca2c482bbef7c0e49a
  const detailTargetData = artistDetail?.find(el => el.artist === param);

  const onClickNavigateHandler = () => {
    navigate(`/artist/${param}`);
  };

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <St.BannerDiv>
        <St.BannerImg src={detailTargetData?.community_banner} />
      </St.BannerDiv>
      <St.InfoDiv>
        <St.InfoNameDiv>
          <St.InfoNameP>{currentUser?.user_metadata.name}</St.InfoNameP>
        </St.InfoNameDiv>
        <St.InfoFollowerDiv>
          <St.InfoFollowP>109</St.InfoFollowP>
          <St.FollowP>팔로워</St.FollowP>
        </St.InfoFollowerDiv>
        <St.InfoFollowingDiv>
          <St.InfoFollowP>20</St.InfoFollowP>
          <St.FollowP>팔로잉</St.FollowP>
        </St.InfoFollowingDiv>
        <St.InfoArtistDiv onClick={onClickNavigateHandler} url={detailTargetData?.community_button}>
          {/* <StInfoArtistImg src={toArtistTestImg}/> */}
          <St.InfoArtistP>아티스트 보러가기</St.InfoArtistP>
        </St.InfoArtistDiv>
      </St.InfoDiv>
    </>
  );
};

export default Info;
