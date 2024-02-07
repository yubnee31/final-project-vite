import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import St from './style';
import Logo from '../../../assets/images/Logo_black_remove.png';
import AlramImg from '../../../assets/images/alarm-icon-white.png';
import MypageImg from '../../../assets/images/profile-white.png';
import ArtistSearch from './Search';
import Alram from './Alram';
import {loginState} from '../../../shared/recoil/authAtom';
import {useRecoilState} from 'recoil';

const Nav = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useRecoilState(loginState);
  const [alarmToggle, setAlarmToggle] = useState<boolean>(false);
  const [alarm, setAlarm] = useState([]);
  return (
    <St.Nav>
      <St.LogNImgsDiv>
        <St.LogoImg
          src={Logo}
          onClick={() => {
            navigate('/');
          }}
        />
        <St.NavImgsDiv>
          <ArtistSearch navigate={navigate} />
          <St.AlramDiv>
            <St.AlramImg
              src={AlramImg}
              onClick={() => {
                setAlarmToggle(!alarmToggle);
              }}
            />
            {alarm.length === 0 ? null : <St.StAlarmCounterP>{alarm.length}</St.StAlarmCounterP>}
          </St.AlramDiv>
          {login ? (
            <>
              <St.MypageImg
                src={MypageImg}
                onClick={() => {
                  navigate('/mypage');
                }}
              />
            </>
          ) : (
            <>
              <St.SigninBtn>Sign In</St.SigninBtn>
            </>
          )}
        </St.NavImgsDiv>
      </St.LogNImgsDiv>
      <div>
        {alarmToggle && (
          <Alram setAlarmToggle={setAlarmToggle} alarmToggle={alarmToggle} alarm={alarm} setAlarm={setAlarm} />
        )}
      </div>
    </St.Nav>
  );
};

export default Nav;
