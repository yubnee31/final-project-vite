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
  const [editNickname, setEditNickname] = useState('');
  const [displayNickname, setDisplayNickname] = useState('');
  const [profileImage, setProfileImage] = useState(user.user_metadata.avatar_url || nomalimage);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // 구글로 로그인한 경우 name이 있으면 nickname으로 사용
    if (user.provider === 'google' && user.user_metadata?.name) {
      setEditNickname(user.user_metadata.name);
      setDisplayNickname(editNickname);
    } else {
      fetchData();
      fetchImageData();
    }
  }, [user]);

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

  const updateNickname = async () => {
    // 사용자 정보 업데이트
    const {data, error} = await supabase.from('userinfo').update({username: editNickname}).eq('id', user.id).select();

    if (error) {
      console.error('닉네임 업데이트 실패', error);
    } else {
      console.log('닉네임 업데이트 완료');
      onUpdateNickname(editNickname);

      alert('닉네임이 변경되었습니다.');
      setDisplayNickname(editNickname);
      setEditNickname('');
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditNickname(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);

      // 이미지 선택 후 프로필 이미지 상태 업데이트
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const updateProfile = async () => {
    if (!selectedImage) return;

    // 프로필 업로드
    const uniqueKey = `profile-image/${Date.now()}_${Math.floor(Math.random() * 1000)}.png`;
    const {data: uploadData, error: uploadError} = await supabase.storage
      .from('profile-images')
      .upload(uniqueKey, selectedImage, {contentType: 'image/png'});

    if (uploadError) {
      console.error('프로필 업로드 실패', uploadError);
      return;
    }

    const supabaseUrl = 'https://dmfvylsldcremnnbzjuo.supabase.co';
    const bucketName = 'profile-images';

    // 프로필 정보 업데이트
    const {data: profileData, error} = await supabase
      .from('userinfo')
      .update({profile_image: uniqueKey})
      .eq('id', user.id)
      .select();

    if (error) {
      console.error('프로필 업데이트 실패', error);
    } else {
      console.log('프로필 업데이트 완료');
      const uploadUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${uniqueKey}`;
      // 이미지 업로드 후 프로필 이미지 상태 업데이트
      setProfileImage(uploadUrl);
      alert('프로필 수정완료 ');
    }
  };
  return (
    <StMyAccount>
      <StProfileImage src={profileImage} alt="아바타 이미지" />
      <h1>{displayNickname || editNickname}</h1>

      <button onClick={() => setShowSettings(!showSettings)}>설정</button>

      {showSettings && user.provider !== 'google' && (
        <>
          <input type="text" placeholder="닉네임을 입력하세요" value={editNickname} onChange={handleNicknameChange} />
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
  object-fit: cover;
`;

export default AccountSettings;
