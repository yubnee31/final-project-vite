import React, {ChangeEvent, useState, useEffect} from 'react';
import {supabase} from '../../api/supabase';
import styled from 'styled-components';
import nomalimage from '../../assets/normalimage.jpg';
import MyAccount from './MyAccount';

interface AccountSettingProps {
  user: {
    id: string;
    user_metadata?: {
      nickname?: string;
      name?: string;
    };
    provider: string;
  };
  onUpdateNickname: (newNickname: string) => void;
}

const AccountSettings = ({user, onUpdateNickname}: AccountSettingProps) => {
  const [editNickname, setEditNickname] = useState('');
  const [displayNickname, setDisplayNickname] = useState('');
  const [profileImage, setProfileImage] = useState(nomalimage);
  const [showMyAccount, setShowMyAccount] = useState(false);

  const handleShowMyAccount = () => {
    setShowMyAccount(true);
  };
  //유저 닉네임 수파베이스에서 불러오기
  const fetchData = async () => {
    const {data, error} = await supabase.from('userinfo').select('username').eq('id', user.id).single();
    if (error) {
      console.error('유저 정보 가져오기 실패', error);
    } else {
      // 값을 업데이트할 변수 설정
      let updatedNickname = '';

      if (data?.username) {
        updatedNickname = data.username;
      }

      // 최종적으로 상태 업데이트
      setEditNickname('');
      setDisplayNickname(updatedNickname);
    }
  };
  // 유저 프로필 서버에서 불러오기
  const fetchImageData = async () => {
    try {
      const {data, error} = await supabase.from('userinfo').select('profile_image').eq('id', user.id).single();

      if (error) {
        console.error('유저 이미지 가져오기 실패', error);
      } else {
        if (data?.profile_image) {
          // 이미지 파일명이나 경로를 가져옴
          const imageFileName = data.profile_image;

          // Supabase 스토리지에서 직접 이미지를 가져오기
          const {data: imageData, error: imageError} = await supabase.storage
            .from('profile-images') // 스토리지 버킷 이름
            .download(imageFileName);

          if (imageError) {
            console.error('프로필 이미지 다운로드 실패', imageError);
          } else {
            // 다운로드된 이미지를 Blob URL로 변환
            const imageUrl = URL.createObjectURL(imageData);

            // 상태 업데이트
            setProfileImage(imageUrl);
          }
        }
      }
    } catch (error) {
      console.error('프로필 이미지 가져오기 오류', error);
    }
  };
  const handleCompleteSettings = () => {
    // Handle completion logic here
    // AccountSettings 컴포넌트가 보이도록 하는 상태 변경
    setShowMyAccount(false);
    fetchImageData();
  };

  useEffect(() => {
    // 구글로 로그인한 경우 name이 있으면 nickname으로 사용
    if (user.provider === 'google' && user.user_metadata?.name) {
      setEditNickname(user.user_metadata.name);
      setDisplayNickname(editNickname);
    } else {
      fetchData();
      fetchImageData();
      console.log('무한루프');
    }
  }, [user]);
  return (
    <>
      {showMyAccount ? (
        <MyAccount user={user} onUpdateNickname={onUpdateNickname} onCompleteSettings={handleCompleteSettings} />
      ) : (
        <>
          <StMyAccountName>
            <p>나의 정보 </p>
          </StMyAccountName>
          <StMyAccount>
            <StProfileImage src={profileImage} alt="아바타 이미지" />
            <StNickName>
              <h1>{displayNickname || editNickname}</h1>
              <h2>Email</h2>
            </StNickName>

            <StSettingButton onClick={handleShowMyAccount}>설정</StSettingButton>
          </StMyAccount>
          <StFollowcontainer>
            <div>
              <StFollowerTX>팔로워 0</StFollowerTX>
            </div>
            <div>
              <StFollowingTX>팔로잉 0</StFollowingTX>
            </div>
          </StFollowcontainer>

          <div>
            <p>FOLLOW ARTIST</p>
            <StFollowArtistList>
              <StFwAtistContainer>
                <div>아티스트 이미지</div>
                <p>아티스트 네임</p>
                <p>펜클럽 이름</p>
              </StFwAtistContainer>
              <StFwAtistContainer>
                <div>아티스트 이미지</div>
                <p>아티스트 네임</p>
                <p>펜클럽 이름</p>
              </StFwAtistContainer>
              <StFwAtistContainer>
                <div>아티스트 이미지</div>
                <p>아티스트 네임</p>
                <p>펜클럽 이름</p>
              </StFwAtistContainer>
            </StFollowArtistList>
          </div>
        </>
      )}
    </>
  );
};
const StMyAccountName = styled.div`
  margin-bottom: 20px;
`;
const StSettingButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 30px;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;
const StNickName = styled.div`
  margin-right: 65%;
  h2 {
    margin-top: 15px;
  }
`;
const StMyAccount = styled.div`
  width: 976px;

  display: flex; /* 가로 정렬을 위한 flex 설정 추가 */
  align-items: center; /* 수직 가운데 정렬을 위한 설정 (선택적으로 사용) */
  justify-content: space-between; /* 자식 요소들을 가로로 정렬 */
  h1 {
    font-size: 25px;
  }
  h2 {
    font-size: 15px;
  }
`;
const StFollowcontainer = styled.div`
  width: 976px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
`;
const StFollowerTX = styled.p``;
const StFollowingTX = styled.p`
  margin-left: 20px;
`;

const StProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
`;
const StFollowArtistList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const StFwAtistContainer = styled.div``;
export default AccountSettings;
