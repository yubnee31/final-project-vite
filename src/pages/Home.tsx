import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import bannerImg from '../assets/images/bannerImg.png';
import { getArtistList } from '../api/artistapi';
import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { supabase } from "../api/supabase";

const Home = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {state: searchInput} = useLocation();
  const [searchedResults, setSearchedResults] = useState<string[]>([]);

  const { data: artistList } = useQuery({
    queryKey: ['artist'],
    queryFn: getArtistList,
  });

  useEffect(() => {
    if (searchInput) {
      const filteredArtists = listTestData.filter(item => item.includes(searchInput));
      setSearchedResults(filteredArtists);
    }
  }, []);

  const artistNavigateHandler = (artistName: string) => {
    navigate(`artist/${artistName}`);
  };

  const myArtistTestData = ['나의 아티스트', '나의 아티스트', '나의 아티스트', '나의 아티스트', '나의 아티스트'];

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
                ?.filter(el => el.includes(searchInput))
                .map(el => {
                  return (
                    <StListTargetDiv
                      onClick={() => {
                        artistNavigateHandler(el.artist);
                      }}
                    >
                      <StListTargetImgDiv></StListTargetImgDiv>
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
              <StDiv>
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
              </StDiv>

              {/* // Artist List */}
              <StListWrapper>
                <StSpan>아티스트 만나보기</StSpan>
                <StListDiv>
                  {artistList?.map(el => {
                    return (
                      <StListTargetDiv
                        onClick={() => {
                          artistNavigateHandler(el.artist);
                        }}
                      >
                        <StListTargetImgDiv></StListTargetImgDiv>
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

  margin-top: 140px;
`;

// Common
const StP = styled.p`
  margin-top: 50px;
  color: white;
`;
const StSpan = styled.span`
  color: white;
  margin-left: 10px;
`;

// Banner
const StBannerDiv = styled.div`
  width: 100vw;
  height: 500px;
  background-color: #f4eefc;

  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 1400px;
  height: 300px;
`;

const StArtistDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);

  height: 200px;
  margin-top: 30px;
`;
const StArtistTargetDiv = styled.div`
  margin: 10px;
`;
const StArtistTargetImgDiv = styled.div`
  height: 140px;
  background-color: pink;
  border-radius: 10px;
`;
const StArtistTargetP = styled.p`
  color: white;
  text-align: center;
  margin-top: 15px;
`;

// Artist List
const StListWrapper = styled.div`
  width: 1400px;
  height: 1000px;

  margin-top: 80px;
`;
const StListDiv = styled.div`
  height: inherit;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
const StListTargetDiv = styled.div`
  color: white;
  margin: 15px;
  margin-top: 30px;

  cursor: pointer;
`;

const StListTargetImgDiv = styled.div`
  height: 140px;
  background-color: pink;
  border-radius: 10px;
`;
const StListTargetP = styled.p`
  color: white;
  text-align: center;
  margin-top: 15px;
`;

export default Home;
