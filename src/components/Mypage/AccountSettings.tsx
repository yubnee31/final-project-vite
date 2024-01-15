import React, {ChangeEvent, useState, useEffect} from 'react';
import {supabase} from '../../api/supabase';

interface AccountSettingProps {
  user: {
    id: string;
    user_metadata?: {
      nickname?: string;
      name?: string;
    };
    provider: string;
  };
}

const AccountSettings = ({user}: AccountSettingProps) => {
  const [nickname, setNickname] = useState(user.user_metadata?.nickname || '');

  useEffect(() => {
    // 구글로 로그인한 경우 name이 있으면 nickname으로 사용
    if (user.provider === 'google' && user.user_metadata?.name) {
      setNickname(user.user_metadata.name);
    }
  }, [user]);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const updateNickname = async () => {
    // 사용자 정보 업데이트
    const {data, error} = await supabase.from('users').update({nickname}).eq('id', user.id);

    if (error) {
      console.error('닉네임 업데이트 실패', error);
    } else {
      console.log('닉네임 업데이트 완료', data);
    }
  };

  return (
    <div>
      <p>닉네임: {nickname}</p>
      {user.provider !== 'google' && (
        <>
          <input type="text" placeholder="닉네임을 입력하시오" value={nickname} onChange={handleNicknameChange} />
          <button onClick={updateNickname}>닉네임 수정</button>
        </>
      )}
      <button>로그인 정보 수파베이스 user 테이블로 넘기기</button>
      <button>좋아요 누른 아티스트</button>
      <p>프로필 사진</p>
    </div>
  );
};

export default AccountSettings;
