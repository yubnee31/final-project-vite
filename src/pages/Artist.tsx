import React, {useEffect, useState} from 'react';
import {supabase} from '../api/supabase';
import styled from 'styled-components';
import Artistchart from '../components/like/Artistchart';
import ReactPlayer from 'react-player';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {loginState} from '../shared/recoil/authAtom';
import Modal from '../components/Modal';
import alarmIcon from '../assets/images/alarm-icon-white.png';
import {getArtistList} from '../api/artistapi';
import {useQuery, useQueryClient} from '@tanstack/react-query';

const Artist = () => {
  const navigate = useNavigate();
  const param = useParams();
  const queryClient = useQueryClient();

  const [login] = useRecoilState(loginState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isArtistModalOpen, setIsArtistModalOpen] = useState<boolean>(false);

  const {data: artistList} = useQuery({
    queryKey: ['artist'],
    queryFn: getArtistList,
  });
  const targetData = artistList?.filter(el => el.artist === param.artistName)[0];
  console.log(targetData);

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

  const handleFloatBtn = () => {
    login ? navigate(`/community/${param.artistName}`) : setIsModalOpen(true);
  };

  const openModalHandler = () => {
    console.log(isArtistModalOpen);
    setIsArtistModalOpen(!isArtistModalOpen);
  };

  const scheduleChecker = [
    {checker: 0, day: '일'},
    {checker: 1, day: '월'},
    {checker: 2, day: '화'},
    {checker: 3, day: '수'},
    {checker: 4, day: '목'},
    {checker: 5, day: '금'},
    {checker: 6, day: '토'},
  ];
  const weekCalculator = () => {};
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = `${year}-${month}-${day}`;
  console.log(dateString);

  return (
    <>
      <StWrapper>
        {/* Banner Image */}
        <StBannerImgDiv>
          {/* <StBannerImg src={artistBannerImg}></StBannerImg> */}
          <StNameSpan>{param.artistName}</StNameSpan>
        </StBannerImgDiv>

        <StContentsWrapper>
          {/* Profile */}
          <StWrapper>
            <StTitle>Profile</StTitle>
            <StProfileDiv>
              {artistTestData.map(el => {
                return (
                  <StPfWrapper onClick={openModalHandler}>
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
          <StWrapper>
            <StTitle>Schedule</StTitle>
            <StScheduleDiv>
              <StScheduleUl>
                {scheduleChecker.map(el => {
                  return (
                    <StScheduleLi>
                      <StScheduleDayP>{el.day}</StScheduleDayP>
                      {/* TODO: getDay checker 일치 여부 */}
                      {targetData.schedule?.map(el => {
                        return (
                          <StScheduleListDiv>
                            <StScheduleListSection>
                              <StScheduleListTimeP>{el.place}</StScheduleListTimeP>
                              <StScheduleListTitleP>{el.title}</StScheduleListTitleP>
                            </StScheduleListSection>
                            <StScheduleListImg src={alarmIcon} />
                          </StScheduleListDiv>
                        );
                      })}
                    </StScheduleLi>
                  );
                })}
                {/* 스케줄 supabase에서 받아오면 날짜 getDay로 checker와 일치 여부 판단 */}
                {/* time으로 sort */}
                {/* supabase columns [{title: '', date: '', time: '', place: ''}] */}
              </StScheduleUl>
            </StScheduleDiv>
          </StWrapper>
        </StContentsWrapper>
        <StFloatBtn onClick={handleFloatBtn}>Go to Community ➜</StFloatBtn>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
        {isArtistModalOpen && (
          <StModalBackDrop onClick={openModalHandler}>
            <StModalView
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <StModalProfileImg src="https://cdnimg.melon.co.kr/cm2/photo/images/000/802/35/695/80235695_20231110103944_org.jpg/melon/quality/80/optimize" />
              <StModalContentsP>
                aespa는 SM 엔터테인먼트에 소속된 걸그룹으로 카리나 (KARINA), 지젤 (GISELLE), 윈터 (WINTER), 닝닝
                (NINGNING)으로 구성되어 있다. 팀명 'aespa'는 ‘Avatar X Experience’를 표현한 'ae’와 양면이라는 뜻의
                영단어 ‘aspect’를 결합해 만든 이름으로, '자신의 또 다른 자아인 아바타를 만나 새로운 세계를 경험하게
                된다'는 세계관을 바탕으로 획기적이고 다채로운 활동을 선보일 예정이다.
              </StModalContentsP>
              <StModalTitleP>데뷔</StModalTitleP>
              <StModalContentsP>2020.11.17</StModalContentsP>
              <StModalTitleP>데뷔곡</StModalTitleP>
              <StModalContentsP>Black Mamba</StModalContentsP>
              <StModalTitleP>수상이력</StModalTitleP>
              <StModalContentsP>제38회 골든디스크 어워즈|음반 본상</StModalContentsP>
              <StModalContentsP>제33회 서울가요대상|본상</StModalContentsP>
              <StModalContentsP>2023 MELON MUSIC AWARDS|밀리언스 TOP10</StModalContentsP>
              <StModalTitleP>유형</StModalTitleP>
              <StModalContentsP>그룹 |여성</StModalContentsP>
              <StModalTitleP>장르</StModalTitleP>
              <StModalContentsP>
                댄스, 일렉트로니카, 발라드, R&B/Soul, 록/메탈, POP, 국외영화, 애니메이션/웹툰
              </StModalContentsP>
              <StModalTitleP>소속사명</StModalTitleP>
              <StModalContentsP>(주)SM엔터테인먼트</StModalContentsP>
            </StModalView>
          </StModalBackDrop>
        )}
      </StWrapper>
      <Artistchart></Artistchart>
    </>
  );
};

// Schedule
const StScheduleDiv = styled.div`
  width: 1200px;
  height: 300px;
`;
const StScheduleUl = styled.ul`
  display: flex;
  justify-content: space-around;
  height: inherit;
  margin-top: 40px;
`;
const StScheduleLi = styled.li`
  text-align: left;
  width: 150px;
  height: inherit;
`;
const StScheduleDayP = styled.p`
  font-size: 15px;
  border-bottom: 2px solid gray;
  height: 25px;
`;

const StScheduleListDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #3a3a3a;
  margin-top: 10px;
`;
const StScheduleListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 130px;
`;
const StScheduleListTimeP = styled.p`
  color: gray;
  font-size: 12px;
`;
const StScheduleListTitleP = styled.p`
  color: white;
  font-size: 15px;
  margin-top: 5px;
`;
const StScheduleListImg = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
  background-size: cover;
`;

// Artist Info Modal
const StModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
`;
const StModalView = styled.div`
  width: 500px;
  height: 400px;
  background-color: #101010c6;
  border-radius: 15px;
  border: 1px solid #6d007b;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background-color: #00000012;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #36363668;
    border-radius: 30px;
  }
  padding-bottom: 30px;
  padding-top: 150px;
`;
const StModalProfileImg = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
  background-size: cover;
  border-radius: 15px;
  margin-bottom: 20px;
`;
const StModalTitleP = styled.p`
  margin-top: 15px;
  font-size: 10px;
`;
const StModalContentsP = styled.p`
  text-align: center;
  background-color: transparent;
  margin: 2px 30px 0px 30px;
  line-height: 1.4;
  font-size: 10px;
`;

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
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  background: linear-gradient(0deg, black, transparent), url('../../public/testImg.jpg');
  background-size: cover;
  object-fit: cover;

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
  cursor: pointer;
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
