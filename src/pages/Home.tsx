import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import bannerImg from '../assets/images/bannerImg.png';
import {getArtistList} from '../api/artistapi';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import Spinner from '../components/Common/Spinner';
import {supabase} from '../api/supabase';
import {getCurrentUser} from '../api/currentUser';

const Home = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {state: searchInput} = useLocation();
  const [searchedResults, setSearchedResults] = useState<string[]>([]);
  const [followAt, setFollowAt] = useState([]);
  //const user = getCurrentUser();

  const {data: artistList, isLoading: artistLoading} = useQuery({
    queryKey: ['artist'],
    queryFn: getArtistList,
  });

  //로그인 하면 팔로우된 유저 정보를 불러온다.
  const fetchFollowArtist = async () => {
    try {
      //로그인 된 사용자 정보 확인
      const user = await supabase.auth.getUser();
      const {data: userinfoData} = await supabase.from('userinfo').select('artist_follow').eq('id', user.data.user.id);
      setFollowAt(userinfoData[0]?.artist_follow);
    } catch (error) {
      console.log('팔로우된 아티스트 불러오기 실패', error);
    }
  };

  useEffect(() => {
    if (searchInput) {
      const filteredArtists = artistList?.filter(item => item.artist.includes(searchInput));
      setSearchedResults(filteredArtists);
    }
    fetchFollowArtist();
  }, []);

  const artistNavigateHandler = (artistName: string) => {
    navigate(`artist/${artistName}`);
  };

  if (artistLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <StMainWrapper>
        {/* // Banner */}
        <StBannerDiv>
          <StBannerImg src={bannerImg}></StBannerImg>
        </StBannerDiv>

        {searchInput && searchInput.length > 0 ? (
          <StListWrapper>
            <StSpan>검색결과</StSpan>
            <StListDiv>
              {artistList
                ?.filter(el => el.artist.includes(searchInput))
                .map(el => {
                  return (
                    <StListTargetDiv
                      key={el.id}
                      onClick={() => {
                        artistNavigateHandler(el.artist);
                      }}
                    >
                      <StArtistTargetImg src={el.photo_url} />
                      <StListTargetP>{el.artist}</StListTargetP>
                    </StListTargetDiv>
                  );
                })}
            </StListDiv>
          </StListWrapper>
        ) : (
          <>
            {/* // My Artist */}
            <StSideWrapper>
              {/* 아티스트 팔로우 기능 생기면 주석 풀기!!! */}
              <StDiv>
                <StSpan>나의 아티스트</StSpan>
                <StArtistDiv>
                  {followAt?.length > 0 ? (
                    followAt?.map((followAt, index) => {
                      console.log('Artist Object:', followAt);

                      return (
                        <StListTargetDiv
                          key={followAt.artistId.id}
                          onClick={() => artistNavigateHandler(followAt.artistId.artist)}
                        >
                          <div>
                            <StArtistTargetImg src={followAt.artistId.photo_url} />
                          </div>
                          <StListTargetP>{followAt.artistId.artist}</StListTargetP>
                        </StListTargetDiv>
                      );
                    })
                  ) : (
                    <p>팔로우한 아티스트가 없습니다.</p>
                  )}
                </StArtistDiv>
              </StDiv>

              {/* // Artist List */}
              <StListWrapper>
                <StSpan>아티스트 만나보기</StSpan>
                <StListDiv>
                  {artistList?.map(el => {
                    return (
                      <StListTargetDiv
                        key={el.id}
                        onClick={() => {
                          artistNavigateHandler(el.artist);
                        }}
                      >
                        <StArtistTargetImg src={el.photo_url} />
                        <StListTargetP>{el.artist}</StListTargetP>
                      </StListTargetDiv>
                    );
                  })}
                </StListDiv>
              </StListWrapper>
              <StP>더 많은 아티스트 준비 중</StP>
            </StSideWrapper>
          </>
        )}
      </StMainWrapper>
    </>
  );
};

// Wrapper
const StMainWrapper = styled.div`
  background-color: black;
  padding-bottom: 100px;
`;
const StSideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;

// Common
const StP = styled.p`
  margin-top: 50px;
  color: white;
`;
const StSpan = styled.span`
  color: white;
  font-size: 24px;
`;

// Banner
const StBannerDiv = styled.div`
  width: 100vw;
  height: 500px;
  background-color: #9747ff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
`;
const StBannerImg = styled.img`
  width: 1000px;
  height: 500px;
  background-size: cover;
  background-color: transparent;
  object-fit: cover;
`;

// My Artist
const StDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  width: 1920px;
  height: 300px;
  padding-left: 240px;
  padding-right: 240px;
`;

const StArtistDiv = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  height: 250px;
`;
const StArtistTargetDiv = styled.div`
  width: 264px;
  height: 292px;
`;
const StArtistTargetImgDiv = styled.div`
  width: 264px;
  height: 214px;
  border-radius: 10px;
  overflow: hidden;
  background-color: pink;
`;
const StArtistTargetImg = styled.img`
  width: 264px;
  height: 214px;
  object-fit: cover;
  border-radius: 10px;
`;
const StArtistTargetP = styled.p`
  color: white;
  text-align: center;
  margin-top: 15px;
  font-size: 18px;
`;

// Artist List
const StListWrapper = styled.div`
  width: 1920px;
  height: 1400px;
  padding-left: 240px;
  padding-right: 240px;
  margin-top: 100px;
`;
const StListDiv = styled.div`
  margin-top: 50px;
  height: inherit;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: space-around;
`;

const StListTargetDiv = styled.div`
  width: 264px;
  height: 292px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const StListTargetImgDiv = styled.div`
  height: 214px;
  border-radius: 10px;
`;
const StListTargetP = styled.p`
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
`;
const StFwAtistContainer = styled.div`
  margin-right: 40px;
  cursor: pointer;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(80%);
    }
  }

  &:hover::after {
    position: absolute;
    padding: 10px;
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;
export default Home;
