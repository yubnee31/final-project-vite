import React, {ChangeEvent, useState, useEffect} from 'react';
import {supabase} from '../../api/supabase';

interface AccountSettingProps {
  user: {
    id: string;
    user_metadata?: {
      nickname?: string;
    };
    provider: string;
  };
  onUpdateNickname: (newNickname: string) => void;
}

const AccountSettings = ({user, onUpdateNickname}: AccountSettingProps) => {
  const [nickname, setNickname] = useState(user.user_metadata?.nickname || '');

  useEffect(() => {
    // 구글로 로그인한 경우 name이 있으면 nickname으로 사용
    if (user.provider === 'google' && user.user_metadata?.name) {
      setNickname(user.user_metadata.name);
    }
  }, [user]);

  const updateNickname = async () => {
    // 사용자 정보 업데이트
    const {data, error} = await supabase.from('userinfo').update({username: nickname}).eq('id', user.id).select();

    if (error) {
      console.error('닉네임 업데이트 실패', error);
    } else {
      console.log('닉네임 업데이트 완료');
      onUpdateNickname(nickname);
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <p>닉네임: {nickname}</p>
      {user.provider !== 'google' && (
        <>
          <input type="text" placeholder="닉네임을 입력하세요" value={nickname} onChange={handleNicknameChange} />
          <button onClick={updateNickname}>닉네임 수정</button>
        </>
      )}
    </div>
  );
};

export default AccountSettings;
