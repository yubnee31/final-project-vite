import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import bannerImg from '../assets/images/bannerImg.png';
import {getArtistList} from '../api/artistapi';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import Spinner from '../components/Common/Spinner';
// import { supabase } from "../api/supabase";

const Home = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {state: searchInput} = useLocation();
  const [searchedResults, setSearchedResults] = useState<string[]>([]);

  const {data: artistList, isLoading: artistLoading} = useQuery({
    queryKey: ['artist'],
    queryFn: getArtistList,
  });

  useEffect(() => {
    if (searchInput) {
      const filteredArtists = artistList?.filter(item => item.artist.includes(searchInput));
      setSearchedResults(filteredArtists);
    }
  }, []);

  const artistNavigateHandler = (artistName: string) => {
    navigate(`artist/${artistName}`);
  };

  const myArtistTestData = ['나의 아티스트', '나의 아티스트', '나의 아티스트', '나의 아티스트', '나의 아티스트'];

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
              {/* <StDiv>
                <StSpan>나의 아티스트</StSpan>
                <StArtistDiv>
                  {myArtistTestData.map(el => {
                    return (
                      <StArtistTargetDiv>
                        <StArtistTargetImgDiv></StArtistTargetImgDiv>
                        <StArtistTargetP>{el}</StArtistTargetP>
                      </StArtistTargetDiv>
                    );
                  })}
                </StArtistDiv>
              </StDiv> */}

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

export default Home;
