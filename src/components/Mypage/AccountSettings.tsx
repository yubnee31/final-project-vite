import React, {ChangeEvent, useState, useEffect} from 'react';
import {supabase} from '../../api/supabase';
import styled from 'styled-components';
import nomalimage from '../../assets/normalimage.jpg';

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
  const [nickname, setNickname] = useState(user.user_metadata?.name || '');
  const [profileImage, setProfileImage] = useState(user.user_metadata.avatar_url || nomalimage);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  console.log(user);
  useEffect(() => {
    // 구글로 로그인한 경우 name이 있으면 nickname으로 사용
    if (user.provider === 'google' && user.user_metadata?.name) {
      setNickname(user.user_metadata.name);
    } else {
      fetchUserData();
    }
  }, [user]);

  useEffect(() => {}, [profileImage]);

  const fetchUserData = async () => {
    // 서버에서 사용자 정보 가져오기
    const {data, error} = await supabase.from('userinfo').select('username').eq('id', user.id).single();

    if (error) {
      console.error('사용자 정보 가져오기 실패', error);
    } else {
      // 가져온 값으로 nickname 설정
      setNickname(data?.username);
    }
  };

  const updateNickname = async () => {
    // 사용자 정보 업데이트
    const {data, error} = await supabase.from('userinfo').update({username: nickname}).eq('id', user.id).select();

    if (error) {
      console.error('닉네임 업데이트 실패', error);
    } else {
      console.log('닉네임 업데이트 완료');
      onUpdateNickname(nickname || '');
      setNickname('');
      alert('닉네임이 변경되었습니다.');
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const updateProfile = async () => {
    if (!selectedImage) return;
    console.log(user.id);
    //프로필 업로드
    const uniqueKey = `${user.id}/profile-image/${Date.now()}`;
    const {data: uploadData, error: uploadError} = await supabase.storage
      .from('profile-images')
      .upload(uniqueKey, selectedImage);

    if (uploadError) {
      console.error('프로필 업로드 실패', uploadError);
      return;
    }

    //프로필 정보 업데이트
    const {data, error} = await supabase.from('userinfo').update({profile_image: uploadData}).eq('id', user.id);

    if (error) {
      console.error('프로필 업데이트 실패', error);
    } else {
      console.log('프로필 업데이트 완료');
      console.log(uploadData);
      setProfileImage(uploadData);
      console.log(profileImage);
    }
  };

  return (
    <StMyAccount>
      <StProfileImage src={profileImage || nomalimage} alt="아바타 이미지" />
      <h1>{nickname}</h1>

      <button onClick={() => setShowSettings(!showSettings)}>설정</button>

      {showSettings && user.provider !== 'google' && (
        <>
          <input type="text" placeholder="닉네임을 입력하세요" value={nickname} onChange={handleNicknameChange} />
          <button onClick={updateNickname}>닉네임 수정</button>
          <div>
            <p>프로필 이미지</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={updateProfile}>프로필 수정</button>
          </div>
        </>
      )}
    </StMyAccount>
  );
};

const StMyAccount = styled.div`
  width: 976px;
`;
const StProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

export default AccountSettings;
