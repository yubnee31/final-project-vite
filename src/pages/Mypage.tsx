import React, {useEffect, useState} from 'react';
import {supabase} from '../api/supabase';
import styled from 'styled-components';
import AccountSettings from '../components/Mypage/AccountSettings';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {loginState} from '../shared/recoil/authAtom';
import Calender from '../components/Calender';

const Mypage = () => {
  const [user, setUser] = useState({});
  const [selectedMenu, setSelectedMenu] = useState('계정 정보');
  const [login, setLogin] = useRecoilState(loginState);
  const [username, setUsername] = useState('');
  const [userInfoData, setUserInfoData] = useState('');
  const navigate = useNavigate();

  // 로그아웃
  const logOut = async () => {
    const {error} = await supabase.auth.signOut();
    setLogin(null);
    navigate('/');
    if (error) console.log('error', error);
  };

  useEffect(() => {
    const userInfo = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();

      if (user) {
        try {
          // userinfo 테이블의 username 값을 가져오기
          const {data: userinfoData, error} = await supabase.from('userinfo').select('username').eq('id', user.id);
          if (error) {
            console.error('userinfo 데이터 불러오기 에러:', error);
            return;
          }
          if (userinfoData && userinfoData.length > 0) {
            setUsername(userinfoData[0].username);
            setUserInfoData(userinfoData as {username: string}[]); // userinfoData 상태 업데이트
          }
        } catch (error) {
          console.error('유저 정보 불러오기 에러:', error);
        }

        setUser(user);
      }
    };
    userInfo();
  }, []);

  const handleMenuClick = menu => {
    setSelectedMenu(menu);
    if (menu === '로그아웃') {
      logOut();
    }
  };

  const handleUpdateNickname = newNickname => {
    // 업데이트된 닉네임을 사용자 정보에 반영
    setUser(prevUser => {
      if (prevUser.user_metadata?.nickname !== newNickname) {
        // 아직 업데이트 되지 않았다면 업데이트
        const updatedUser = {
          ...prevUser,
          user_metadata: {
            ...prevUser.user_metadata,
            nickname: newNickname,
          },
        };

        // username 업데이트
        setUsername(updatedUser.user_metadata.nickname);

        return updatedUser;
      }

      // 이미 업데이트 된 경우에는 이전 상태 그대로 반환
      return prevUser;
    });
  };

  return (
    <StMypageContainer>
      <StWrapper>
        <StFormWrapper>
          <StMenuDiv>
            <StMenuBtn
              className={selectedMenu === '계정 정보' ? 'target' : ''}
              onClick={() => handleMenuClick('계정 정보')}
            >
              나의 정보
            </StMenuBtn>
            <StMenuBtn className={selectedMenu === '스케줄' ? 'target' : ''} onClick={() => handleMenuClick('스케줄')}>
              나의 스케줄
            </StMenuBtn>
            <StMenuBtn
              className={selectedMenu === '1:1문의 하기' ? 'target' : ''}
              onClick={() => handleMenuClick('1:1문의 하기')}
            >
              1:1문의 하기
            </StMenuBtn>
            <StMenuBtn
              className={selectedMenu === '로그아웃' ? 'target' : ''}
              onClick={() => handleMenuClick('로그아웃')}
            >
              로그아웃 하기
            </StMenuBtn>
          </StMenuDiv>
        </StFormWrapper>
        <Staccount>
          {selectedMenu === '계정 정보' && <AccountSettings user={user} onUpdateNickname={handleUpdateNickname} />}
          {selectedMenu === '스케줄' && <Calender />}
          {selectedMenu === '1:1문의 하기' && <p>1:1문의 하기 컨텐츠</p>}
          {selectedMenu === '로그아웃'}
        </Staccount>
      </StWrapper>
    </StMypageContainer>
  );
};

const StMypageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 900px;
  margin-top: 150px;
`;
const StWrapper = styled.div`
  width: 1200px;
  height: inherit;
  display: flex;
  justify-content: center;
`;
const StFormWrapper = styled.div`
  width: 200px;
  height: 700px;
`;
const Staccount = styled.div`
  width: 1000px;
  height: 700px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const StMenuBtn = styled.button`
  font-size: 17px;
  color: gray;
  cursor: pointer;
  border: none;
  margin-bottom: 45px;
  &:hover {
    text-decoration: underline;
  }
  &.target {
    color: white;
    transition: 0.3s;
  }
`;
const StMenuDiv = styled.div`
  height: inherit;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  text-align: start;
`;

export default Mypage;
