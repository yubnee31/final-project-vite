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

  // 로그아웃
  const logOut = async () => {
    const {error} = await supabase.auth.signOut();
    setLogin(null);
    navigate('/');
    if (error) console.log('error', error);
  };

  return (
    <>
      <StNav>
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
              <StSignInBtn onClick={logOut}>
                <StBtnP>Logout</StBtnP>
              </StSignInBtn>
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
      </StNav>

      {/* <DropDownDiv>
        <DropDownImgDiv>
          <StImg src={process.env.PUBLIC_URL + '/images/search-icon-white.png'}></StImg>
        </DropDownImgDiv> 
        <DropDownInput 
        placeholder='아티스트 검색하기'
        />
      </DropDownDiv> */}
    </>
  );
};

// Dropdown
// const DropDownDiv = styled.div`
//   width: 100vw;
//   height: 300px;
//   background-color: #3a3a3a;
//   padding-top: 80px;

//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const DropDownImgDiv = styled.div`
//   width: 50px;
//   height: 50px;
// `;
// const DropDownInput = styled.input`
//   width: 40vw;
//   height: 50px;

//   background-color: transparent;
//   border: none;
//   border-bottom: 2px solid #292929;

//   color: #c5c5c5;
//   font-size: 18px;
//   font-weight: bold;

//   margin-left: 20px;
// `;

// TODO : 최소 사이즈 1000px 잡기
// Layout

export default Nav;
