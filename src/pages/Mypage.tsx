import React, {useEffect, useState} from 'react';
import {supabase} from '../api/supabase';
import styled from 'styled-components';
import AccountSettings from '../components/Mypage/AccountSettings';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {loginState} from '../shared/recoil/authAtom';

const Mypage = () => {
  const [user, setUser] = useState({});
  const [selectedMenu, setSelectedMenu] = useState('');
  const [login, setLogin] = useRecoilState(loginState);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();

      if (user) {
        // userinfo 테이블의 username 값을 가져오기
        const {data: userinfoData, error} = await supabase.from('userinfo').select('username').eq('id', user.id);

        if (userinfoData && userinfoData.length > 0) {
          setUsername(userinfoData[0].username);
        }

        setUser(user);
      }
    };
    userInfo();
  }, [user, username]);

  const handleMenuClick = menu => {
    setSelectedMenu(menu);
  };

  const handleUpdateNickname = newNickname => {
    // 업데이트된 닉네임을 사용자 정보에 반영
    setUser(prevUser => ({
      ...prevUser,
      user_metadata: {
        ...prevUser.user_metadata,
        nickname: newNickname,
      },
    }));
  };

  return (
    <StMypageContainer>
      <StFormWrapper>
        {user && user.user_metadata ? (
          <StEmailBox>
            <h1>{username || user.user_metadata.name}</h1>
            <h3>Email</h3>
            <p onClick={() => handleMenuClick('계정 정보')}>계정 설정</p>
            <h2>나의 정보</h2>
            <p onClick={() => handleMenuClick('스케줄')}>저장한 스케줄 보기</p>
            <p onClick={() => handleMenuClick('1:1문의 하기')}>1:1문의 하기</p>
            <p onClick={() => handleMenuClick('로그아웃')}>로그아웃 하기</p>
          </StEmailBox>
        ) : (
          <p>로딩 중</p>
        )}
      </StFormWrapper>
      <Staccount>
        {selectedMenu === '계정 정보' && (
          <p>
            <AccountSettings user={user} onUpdateNickname={handleUpdateNickname} />
          </p>
        )}
        {selectedMenu === '스케줄' && <p>스케줄 컨텐츠</p>}
        {selectedMenu === '1:1문의 하기' && <p>1:1문의 하기 컨텐츠</p>}
      </Staccount>
    </StMypageContainer>
  );
};

const StMypageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 100px;
`;
export const StFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-right: 25%;
`;
export const StEmailBox = styled.div`
  /* border: 1px white solid; */
  height: 700px;
  h1 {
    margin: 15px;
    font-size: 32px;
  }
  h2 {
    font-size: 22px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  p {
    cursor: pointer;
    margin: 20px;
    :hover {
      text-decoration: underline;
    }
  }
`;
export const Staccount = styled.div`
  width: 40%;
  height: 10%;
`;

export default Mypage;
