import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from '../assets/images/bannerImg.png'
// import { supabase } from "../api/supabase";

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data, error } = await supabase.from("testTable").select("*");
  //       return data;
  //     } catch (error) {
  //       console.log("Error", error);
  //     }
  //   };
  //   const artistData = fetchData();
  // });
  const navigate = useNavigate()
  const artistNavigateHandler = (artistName: string) => {
    navigate(`artist/${artistName}`)
  }
  const myArtistTestData = [
    "나의 아티스트",
    "나의 아티스트",
    "나의 아티스트",
    "나의 아티스트",
    "나의 아티스트",
  ];
  const listTestData = [
    "르세라핌",
    "태연",
    "임재현",
    "aespa",
    "EXO",
    "박재정",
    "범진",
    "아이브",
    "정국",
    "임영웅",
    "너드커넥션",
    "이무진",
    "아이유",
    "제니",
    "악뮤",
    "제니",
    "RIIZE",
    "우디",
    "여자아이들",
    "QWER",
  ];

  return (
    <StMainWrapper>
      {/* // Banner */}
      <StBannerDiv>
        <StBannerImg src={bannerImg}></StBannerImg>
      </StBannerDiv>

      {/* // My Artist */}
      <StSideWrapper>
        <StDiv>
          <StSpan>나의 아티스트</StSpan>
          <StArtistDiv>
            {myArtistTestData.map((el) => {
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
            {listTestData.map((el) => {
              return (
                <StListTargetDiv onClick={() => {artistNavigateHandler(el)}}>
                  <StListTargetImgDiv></StListTargetImgDiv>
                  <StListTargetP>{el}</StListTargetP>
                </StListTargetDiv>
              );
            })}
          </StListDiv>
        </StListWrapper>
        <StP>더 많은 아티스트 준비 중</StP>
      </StSideWrapper>
    </StMainWrapper>
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
  background-color: #F4EEFC;

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
`

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
