import {useEffect, useState} from 'react';
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
    if (error) {
      // console.log('error', error);
    }
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
            return;
          }
          if (userinfoData && userinfoData.length > 0) {
            setUsername(userinfoData[0].username);
            setUserInfoData(userinfoData as {username: string}[]); // userinfoData 상태 업데이트
          }
        } catch (error) {
          // console.error('유저 정보 불러오기 에러:', error);
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
      // Check if user_metadata exists, if not, create it
      const newUserMetadata = prevUser.user_metadata
        ? {...prevUser.user_metadata, nickname: newNickname}
        : {nickname: newNickname};

      if (prevUser.user_metadata?.nickname !== newNickname) {
        // 아직 업데이트 되지 않았다면 업데이트
        const updatedUser = {
          ...prevUser,
          user_metadata: newUserMetadata,
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
        <StLogoutMenuBtn
          className={selectedMenu === '로그아웃' ? 'target' : ''}
          onClick={() => handleMenuClick('로그아웃')}
        >
          로그아웃 하기
        </StLogoutMenuBtn>
      </StMenuDiv>
      <Staccount>
        {selectedMenu === '계정 정보' && <AccountSettings user={user} onUpdateNickname={handleUpdateNickname} />}
        {selectedMenu === '스케줄' && <Calender />}
        {selectedMenu === '1:1문의 하기' && <p>1:1문의 하기 컨텐츠</p>}
        {selectedMenu === '로그아웃'}
      </Staccount>
    </StMypageContainer>
  );
};

const StMypageContainer = styled.div`
  background-color: #121212;
  display: flex;
  justify-content: center;
  padding-top: 140px;
  width: 100vw;
  height: 1000px;
`;
const StMenuDiv = styled.div`
  background-color: #121212;
  width: 170px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #636366;
`;
const StMenuBtn = styled.button`
  background-color: #121212;
  width: 125px;
  line-height: 24px;
  font-size: 16px;
  color: #aeaeb2;
  cursor: pointer;
  border: none;
  margin-bottom: 60px;
  text-align: left;
  &:hover {
    color: white;
    transition: 0.3s;
  }
`;
const StLogoutMenuBtn = styled.button`
  background-color: #121212;
  width: 100px;
  line-height: 24px;
  font-size: 16px;
  text-align: left;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #aeaeb2;
  color: #aeaeb2;
  cursor: pointer;
  margin-bottom: 45px;
  &:hover {
    color: white;
    transition: 0.3s;
  }
`;
const Staccount = styled.div`
  background-color: #121212;
  width: 975px;

  display: flex;
  justify-content: center;
`;

export default Mypage;
