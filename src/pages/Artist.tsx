import React, {useEffect} from 'react';
import {supabase} from '../api/supabase';
import styled from 'styled-components';
import Artistchart from '../components/like/Artistchart';
import ReactPlayer from 'react-player';

const Artist = () => {
  useEffect(() => {
    const userInfo = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      console.log(user);
    };
    userInfo();
  }, []);

  const artistTestData = ['카리나', '윈터', '닝닝', '지젤'];
  const albumsTestData = [
    {id: 1, title: 'Drama - The 4th Mini Album', date: '2023.11.10'},
    {id: 2, title: 'MY WORLD - The 3rd Mini Album', date: '2023.05.08 '},
    {id: 3, title: 'Girls - The 2nd Mini Album', date: '2022.07.08'},
    {id: 4, title: 'Savage - The 1st Mini Album', date: '2021.10.05'},
  ];
  const photoTestData = [
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/38/553/80238553_20231202223512_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/38/487/80238487_20231202205505_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/38/481/80238481_20231202205503_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/35/687/80235687_20231110103941_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/35/705/80235705_20231110104140_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/35/695/80235695_20231110103944_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/25/868/80225868_20230818114014_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/38/553/80238553_20231202223512_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/38/487/80238487_20231202205505_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/38/481/80238481_20231202205503_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/35/687/80235687_20231110103941_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/35/705/80235705_20231110104140_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/35/695/80235695_20231110103944_org.jpg/melon/quality/80/optimize',
    'https://cdnimg.melon.co.kr/cm2/photo/images/000/802/25/868/80225868_20230818114014_org.jpg/melon/quality/80/optimize',
  ];

  const albumVaildationHandler = (title: string) => {
    const maxLength = 23;
    if (title.length > maxLength) {
      const result = title.slice(0, maxLength) + '···';
      return result;
    }
  };

  return (
    <>
      <StWrapper>
        {/* Banner Image */}
        <StBannerImgDiv>
          <StNameSpan>Aespa</StNameSpan>
        </StBannerImgDiv>

        <StContentsWrapper>
          {/* Profile */}
          <StWrapper>
            <StTitle>Profile</StTitle>
            <StProfileDiv>
              {artistTestData.map(el => {
                return (
                  <StPfWrapper>
                    <StPfMemberDiv>
                      <StPfMemberImg src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/028/99/557/2899557_20231109104729_500.jpg?8be6f07f7073a2610be7863fad33b8ae/melon/resize/416/quality/80/optimize"></StPfMemberImg>
                    </StPfMemberDiv>
                    <StPfSpan>{el}</StPfSpan>
                  </StPfWrapper>
                );
              })}
            </StProfileDiv>
          </StWrapper>

          {/* Albums  */}
          <StWrapper>
            <StTitle>Albums</StTitle>
            <StAlbumsDiv>
              {albumsTestData.map(el => {
                return (
                  <StAbWrapper>
                    <StAbImgDiv>
                      <StAbImg src="https://cdnimg.melon.co.kr/cm2/album/images/113/62/544/11362544_20231110142622_500.jpg?YUV444-90/melon/resize/282"></StAbImg>
                    </StAbImgDiv>
                    <StAbContentsSectiion>
                      <StAbTitleP>{albumVaildationHandler(el.title)}</StAbTitleP>
                      <StAbdateP>{el.date}</StAbdateP>
                    </StAbContentsSectiion>
                  </StAbWrapper>
                );
              })}
            </StAlbumsDiv>
          </StWrapper>

          {/* Music Video */}
          <StWrapper>
            <StTitle>Music Video</StTitle>
            <StVideoDiv>
              <ReactPlayer
                url={'https://www.youtube.com/embed/D8VEhcPeSlc?si=HDZtluGogKS711ox'}
                width="1200px"
                height="675px"
                playing={true}
                muted={true}
                controls={true}
                loop={true}
              />
            </StVideoDiv>
          </StWrapper>

          {/* Photo */}
          <StWrapper>
            <StTitle>Photo</StTitle>
            <StPhotoDiv>
              {photoTestData.map(el => {
                return (
                  <StPhotoImgDiv>
                    <StPhotoImg src={el}></StPhotoImg>
                  </StPhotoImgDiv>
                );
              })}
            </StPhotoDiv>
          </StWrapper>
        </StContentsWrapper>
        <StFloatBtn>Go to Community ➜</StFloatBtn>
      </StWrapper>
      <Artistchart></Artistchart>
    </>
  );
};

// Wrapper
const StWrapper = styled.div``;
const StContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// Common
const StTitle = styled.p`
  margin-top: 80px;
  margin-bottom: 15px;
  font-family: Pretendard-Regular;
  font-size: 20px;
`;

// Banner
const StBannerImgDiv = styled.div`
  margin-top: 80px;
  width: 100vw;
  height: 500px;
  background-image: linear-gradient(0deg, black, transparent), url('../../public/images/testImg.jpg');
  background-size: cover;
  object-fit: cover;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  margin-bottom: 30px;
`;

// Name
const StNameSpan = styled.span`
  font-family: Pretendard-Regular;
  font-size: 50px;
  font-weight: 800;
  letter-spacing: 5px;
  background-color: transparent;
`;

// Profile
const StProfileDiv = styled.div`
  width: 1200px;

  display: grid;
  grid-template-columns: repeat(5, 250px);
  grid-auto-rows: 250px;

  row-gap: 30px;
`;
const StPfWrapper = styled.div`
  width: 200px;
  height: 250px;
`;
const StPfMemberDiv = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;
const StPfMemberImg = styled.img`
  width: inherit;
  height: inherit;
  background-size: cover;
  object-fit: cover;
  border-radius: 15px;
`;
const StPfSpan = styled.span`
  font-family: Pretendard-Regular;
  letter-spacing: 2px;
  margin-left: 5px;
`;

// Album
const StAlbumsDiv = styled.div`
  width: 1200px;
  height: 300px;

  display: grid;
  grid-template-columns: repeat(5, 250px);
  grid-auto-rows: 250px;
  row-gap: 30px;
`;
const StAbWrapper = styled.div`
  width: 200px;
  height: 250px;
  cursor: pointer;
`;
const StAbImgDiv = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;
const StAbImg = styled.img`
  width: inherit;
  height: inherit;
  background-size: cover;
  object-fit: cover;
  border-radius: 15px;
`;

const StAbContentsSectiion = styled.section`
  margin-left: 5px;
`;
const StAbTitleP = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
`;
const StAbdateP = styled.p`
  font-size: 10px;
  color: gray;
`;

// Music Video
const StVideoDiv = styled.div`
  width: 1200px;
  height: 800px;
`;

// Photo
const StPhotoDiv = styled.div`
  width: 1200px;
  height: 500px;

  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-auto-rows: 220px;
  gap: 20px;

  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background-color: #232323;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #84898c3a;
    border-radius: 30px;
  }
`;
const StPhotoImgDiv = styled.div`
  width: 220px;
  height: 220px;
`;
const StPhotoImg = styled.img`
  border-radius: 15px;

  width: inherit;
  height: inherit;
  background-size: cover;
  object-fit: cover;
`;

// Floating Button
const StFloatBtn = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;

  width: 200px;
  height: 50px;

  border: none;
  background-image: linear-gradient(45deg, #d651d6, #5a68e8, #e1b1ff);
  border-radius: 5px;

  font-family: Pretendard-Regular;

  margin-bottom: 30px;
  margin-right: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.7s;
  }
`;

export default Artist;
