import React, {useEffect, useState} from 'react';
import {supabase} from '../api/supabase';
import {getArtistDetail} from '../api/artistapi';
import styled from 'styled-components';
import Artistchart from '../components/like/Artistchart';
import ReactPlayer from 'react-player';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {loginState} from '../shared/recoil/authAtom';
import Modal from '../components/Modal';
import Checker from '../components/Schedule/Checker';
import {useQuery} from '@tanstack/react-query';
import FollowArtistBt from '../components/follow/FollowArtistBt';

const Artist = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [currentuser, setCurrentuser] = useState('');
  const [login] = useRecoilState(loginState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isArtistModalOpen, setIsArtistModalOpen] = useState<boolean>(false);

  const {data: artistDetail} = useQuery({
    queryKey: [''],
    queryFn: getArtistDetail,
  });
  const detailTargetData = artistDetail?.find(el => el.artist === param.artistName);

  useEffect(() => {
    const userInfo = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      setCurrentuser(user);
    };
    userInfo();
  }, []);

  const albumVaildationHandler = (title: string) => {
    const maxLength = 23;
    if (title.length > maxLength) {
      const result = title.slice(0, maxLength) + '···';
      return result;
    } else {
      return title;
    }
  };

  const handleFloatBtn = () => {
    login ? navigate(`/community/${param.artistName}`) : setIsModalOpen(true);
  };

  const openModalHandler = () => {
    console.log(isArtistModalOpen);
    setIsArtistModalOpen(!isArtistModalOpen);
  };

  return (
    <>
      <StWrapper>
        {/* Banner Image */}
        <StBannerImgDiv url={detailTargetData?.cover}>
          {/* <StBannerImg src={artistBannerImg}></StBannerImg> */}
          <StNameSpan>{param.artistName}</StNameSpan>
          {/* <FollowArtistBt postId={currentuser.id} artistId={param.artistName}>
            팔로우
          </FollowArtistBt> */}
        </StBannerImgDiv>

        <StContentsWrapper>
          {/* Profile */}
          <StWrapper>
            <StTitle>Profile</StTitle>
            <StProfileDiv>
              {detailTargetData?.profile?.map(el => {
                return (
                  <StPfWrapper onClick={openModalHandler}>
                    <StPfMemberDiv>
                      <StPfMemberImg src={el.memberImg}></StPfMemberImg>
                    </StPfMemberDiv>
                    <StPfSpan>{el.memberName}</StPfSpan>
                  </StPfWrapper>
                );
              })}
            </StProfileDiv>
          </StWrapper>

          {/* Albums  */}
          <StWrapper>
            <StTitle>Albums</StTitle>
            <StAlbumsDiv>
              {detailTargetData?.album?.map(el => {
                return (
                  <StAbWrapper>
                    <StAbImgDiv>
                      <StAbImg src={el.albumImg}></StAbImg>
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
                url={detailTargetData?.musicVideo}
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
              {detailTargetData?.photo?.map(el => {
                return (
                  <StPhotoImgDiv>
                    <StPhotoImg src={el.imgUrl}></StPhotoImg>
                  </StPhotoImgDiv>
                );
              })}
            </StPhotoDiv>
          </StWrapper>
          <StWrapper>
            <StTitle>Schedule</StTitle>
            <Checker param={param.artistName} />
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
    </>
  );
};

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
  padding-top: 50px;
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
const StBannerImgDiv = styled.div<{url: string}>`
  width: 100vw;
  height: 770px;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  background: linear-gradient(0deg, black, transparent), url(${props => props.url}) center center;
  background-repeat: no-repeat;
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
