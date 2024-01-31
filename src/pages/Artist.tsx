import {useEffect, useState} from 'react';
import {supabase} from '../api/supabase';
import {getArtistDetail} from '../api/artistapi';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {loginState} from '../shared/recoil/authAtom';
import Checker from '../components/Schedule/Checker';
import {useQuery} from '@tanstack/react-query';
import FollowArtistBt from '../components/follow/FollowArtistBt';
import Spinner from '../components/Common/Spinner';
import PortalModal from '../components/Common/portalModal';
import FloatBtnModal from '../components/Modal/FloatBtnModal';

const Artist = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [currentuser, setCurrentuser] = useState('');
  const [login] = useRecoilState(loginState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const {data: artistDetail, isLoading: artistDetailLoading} = useQuery({
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

  const handleModalClose = () => {
    setIsPhotoModalOpen(false);
  };

  const handleFloatBtn = () => {
    login ? navigate(`/community/${param.artistName}`) : setIsModalOpen(true);
  };

  if (artistDetailLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <StWrapper>
        <StBannerImgDiv url={detailTargetData?.cover}>
          <StNameSpan>{param.artistName}</StNameSpan>
          <FollowArtistBt
            postId={login ? currentuser.id : null}
            artistId={param.artistName}
            // fwcount={targetData.artist_fw_count}
          ></FollowArtistBt>
        </StBannerImgDiv>

        <StContentsWrapper>
          <StWrapper>
            <StTitle>프로필</StTitle>
            <StProfileDiv>
              {detailTargetData?.profile?.map(e => {
                return (
                  <StPfWrapper>
                    <StPfMemberDiv>
                      <StPfMemberImg src={e.memberImg}></StPfMemberImg>
                      {detailTargetData?.info
                        ?.filter((el: {name: string}) => el.name === e.memberName)
                        ?.map(ele => {
                          return (
                            <StPfDetailDiv>
                              <StPfDetailP>{`본명 : ${ele.realName}`}</StPfDetailP>
                              <StPfDetailP>{`생년월일 : ${ele.birthday}`}</StPfDetailP>
                              <StPfDetailP>{`데뷔일 : ${ele.debutDate}`}</StPfDetailP>
                              <StPfDetailP>{`데뷔곡 : ${ele.debutSong}`}</StPfDetailP>
                            </StPfDetailDiv>
                          );
                        })}
                    </StPfMemberDiv>
                    <StPfSpan>{e.memberName}</StPfSpan>
                  </StPfWrapper>
                );
              })}
            </StProfileDiv>
          </StWrapper>

          <StWrapper>
            <StTitle>앨범</StTitle>
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

          <StWrapper>
            <StTitle>뮤직비디오</StTitle>
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

          <StWrapper>
            <StTitle>사진</StTitle>
            <StPhotoDiv>
              {detailTargetData?.photo?.map(el => (
                <StPhotoImgDiv
                  key={el.imgUrl}
                  onClick={() => {
                    setSelectedPhoto(el.imgUrl);
                    setIsPhotoModalOpen(true);
                  }}
                >
                  <StPhotoImg src={el.imgUrl.replace('/melon/', '/melon/resize/450/')} />
                </StPhotoImgDiv>
              ))}
              {isPhotoModalOpen && (
                <StModalContainer onClick={handleModalClose}>
                  <StModalContent src={selectedPhoto} />
                </StModalContainer>
              )}
            </StPhotoDiv>
          </StWrapper>
          <StWrapper>
            <StTitle>스케줄</StTitle>
            <Checker param={param.artistName} />
          </StWrapper>
        </StContentsWrapper>
        <StFloatBtn onClick={handleFloatBtn}>커뮤니티 가기 ➜</StFloatBtn>
        <PortalModal>{isModalOpen && <FloatBtnModal setIsModalOpen={setIsModalOpen} />}</PortalModal>
      </StWrapper>
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
`;
const StPfMemberDiv = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  position: relative;
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
const StPfDetailP = styled.p`
  background-color: transparent;
  color: transparent;
  margin-top: 15px;
  font-size: 14px;
`;
const StPfDetailDiv = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    background-color: #000000aa;
    transition: 0.5s;
  }
  &:hover ${StPfDetailP} {
    transition: 0.5s;
    color: #ececec;
  }
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
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: all 1s;
  }
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
const StModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModalContent = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
`;
export default Artist;
