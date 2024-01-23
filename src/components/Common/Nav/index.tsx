import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {loginState} from '../../../shared/recoil/authAtom';
import {supabase} from '../../../api/supabase';
import alarmIcon from '../../../assets/images/alarm-icon-white.png';
import searchIcon from '../../../assets/images/search-icon-white.png';
import {
  StBtnDiv,
  StBtnP,
  StButton,
  StForm,
  StImg,
  StInput,
  StLogoDiv,
  StLogoSpan,
  StNav,
  StNavDiv,
  StNavWrapper,
  StSearchButton,
  StSignInBtn,
} from './style';

const Nav = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(loginState);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/', {state: searchInput});
  };

  // , filter: `user_id=in.(${subList})` => 유저 정보 받아와서 쿼리문에 필터 기능 추가

  supabase
    .channel('db-changes')
    .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'userSchedule'}, payload => {
      console.log('Change received!', payload);
    })
    .subscribe();

  return (
    <>
      <StNav>
        <StNavWrapper>
          <StNavDiv>
            <StLogoDiv>
              <StLogoSpan
                onClick={() => {
                  navigate('/');
                }}
              >
                AIdol
              </StLogoSpan>
            </StLogoDiv>

            <StBtnDiv>
              <StForm onSubmit={handleSearchBtn}>
                <StInput placeholder="검색어입력" value={searchInput} onChange={e => handleSearchInput(e)}></StInput>
                <StSearchButton>
                  <StImg src={searchIcon}></StImg>
                </StSearchButton>
              </StForm>
              <StButton>
                <StImg src={alarmIcon}></StImg>
              </StButton>
              {login ? (
                <>
                  <StSignInBtn
                    onClick={() => {
                      navigate('/mypage');
                    }}
                  >
                    <StBtnP>Mypage</StBtnP>
                  </StSignInBtn>
                </>
              ) : (
                <StSignInBtn
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  <StBtnP>Sign In</StBtnP>
                </StSignInBtn>
              )}
            </StBtnDiv>
          </StNavDiv>
        </StNavWrapper>
      </StNav>
    </>
  );
};

export default Nav;
