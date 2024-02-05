import React, {useEffect, useRef, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getCurrentUser} from '../../../api/currentUser';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {loginState} from '../../../shared/recoil/authAtom';
import {supabase} from '../../../api/supabase';
import alarmIcon from '../../../assets/images/alarm.svg';
import searchIcon from '../../../assets/images/search.svg';
import escape from '../../../assets/images/escape.svg';
import {Alarm} from '../../../types/global.d';
import dayjs from 'dayjs';
import profileImg from '../../../assets/images/profile-white.png';
import {
  StBtnDiv,
  StBtnP,
  StForm,
  StImg,
  StInput,
  StSearchOpenToggleImg,
  StLogoDiv,
  StLogoSpan,
  StNav,
  StNavDiv,
  StNavWrapper,
  StSignInBtn,
  StButton,
  StAlarmImg,
  StAlarmCounterP,
  StAlarmListDiv,
  StAlarmListUl,
  StAlarmListLi,
  StAlarmListP,
  StAlarmTimeP,
  StAlarmTitleP,
  StAlarmDeleteBtn,
  StAlarmContentsDiv,
  StAlarmDiv,
  StAlarmP,
  StInfoP,
} from './style';

const Nav = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(loginState);
  const [searchInput, setSearchInput] = useState<string>('');
  const [alarm, setAlarm] = useState<Alarm[]>([]);
  const [alarmToggle, setAlarmToggle] = useState<boolean>(false);
  const alarmBtRef = useRef(null);

  // toggle
  const [openToggle, setOpenToggle] = useState(false);
  const handleToggle = () => {
    setOpenToggle(!openToggle);
  };

  const {data: currentUser} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/', {state: searchInput});
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (alarmBtRef.current && !alarmBtRef.current.contains(e.target)) {
        setAlarmToggle(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const taskListener = supabase
    .channel('schedule-changes')
    .on(
      'postgres_changes',
      {event: 'INSERT', schema: 'public', table: 'userSchedule', filter: `userid=in.(${currentUser?.id})`},
      payload => {
        const {id, artist, userid, created_at, title, date} = payload.new;
        const createdFormat = dayjs(created_at).format('YYYY.MM.DD HH:mm:ss');
        const alarmData: Alarm = {
          id: id,
          artist: artist,
          userid: userid,
          created_at: createdFormat,
          title: title,
          date: date,
        };
        setAlarm([...alarm, alarmData]);

        // alarm 을 누르면 display 상태 바뀌기 (알람이 없을 경우 CSS 도 작업)
      },
    )
    .subscribe();

  const alarmDeleteHandler = id => {
    setAlarm(alarm.filter(e => e.id !== id));
  };

  return (
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
            {openToggle && (
              <StForm onSubmit={handleSearchBtn}>
                <StInput placeholder="검색어입력" value={searchInput} onChange={e => handleSearchInput(e)} />
              </StForm>
            )}
            <StSearchOpenToggleImg src={searchIcon} alt="검색어 아이콘" onClick={handleToggle} />
            <StButton>
              <StAlarmImg
                src={alarmIcon}
                alt="알람 아이콘"
                onClick={() => {
                  setAlarmToggle(!alarmToggle);
                }}
              />
              {alarm.length === 0 ? null : <StAlarmCounterP>{alarm.length}</StAlarmCounterP>}
            </StButton>
            <StAlarmListDiv ref={alarmBtRef} className={alarmToggle ? 'On' : 'OFF'}>
              <StAlarmDiv>
                <StAlarmP>알림</StAlarmP>
                <StInfoP>추가한 스케줄은 마이페이지에서 확인 가능합니다.</StInfoP>
              </StAlarmDiv>
              <StAlarmListUl>
                {alarm
                  .sort((a, b) => {
                    const aDate: any = new Date(a.created_at);
                    const bDate: any = new Date(b.created_at);
                    return bDate - aDate;
                  })
                  .map(e => {
                    return (
                      <StAlarmListLi>
                        <StAlarmContentsDiv>
                          <StAlarmTitleP>{e.artist} 스케줄이 추가되었습니다.</StAlarmTitleP>
                          <StAlarmListP>
                            {e.title} / {e.date}
                          </StAlarmListP>
                        </StAlarmContentsDiv>
                        <StAlarmTimeP>{e.created_at}</StAlarmTimeP>
                        <StAlarmDeleteBtn
                          onClick={() => {
                            alarmDeleteHandler(e.id);
                          }}
                        >
                          <StImg src={escape} alt="profile icon" />
                        </StAlarmDeleteBtn>
                      </StAlarmListLi>
                    );
                  })}
              </StAlarmListUl>
            </StAlarmListDiv>
            {login ? (
              <>
                <StImg
                  src={profileImg}
                  onClick={() => {
                    navigate('/mypage');
                  }}
                />
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
  );
};

export default Nav;
