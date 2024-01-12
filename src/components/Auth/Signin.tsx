import React, { useEffect, useState } from 'react'
import { supabase } from '../../api/supabase'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { loginState } from '../../shared/recoil/authAtom'

const Signin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const navigate = useNavigate()

  //리코일로 로그인상태관리
  const setLogin = useSetRecoilState(loginState)

  // user 정보 테스트
  useEffect(() => {
    const userInfo = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      console.log(user)
    }
    userInfo()
  }, [])

  // 이메일 로그인
  const handleLoginButtonClick = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    // 리코일 깊은 복사
    setLogin(JSON.parse(JSON.stringify(data.user)))
    if (data.user !== null) navigate('/')
    if (error) alert('로그인에 실패했습니다')
  }

  // google 로그인
  const googleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
    setLogin(JSON.parse(JSON.stringify(data.provider)))
    if (error) console.log('error', error)
  }

  // kakao 로그인
  const kakaoLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
    setLogin(JSON.parse(JSON.stringify(data.provider)))
    if (error) console.log('error', error)
  }

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setEmail(email)
    email.includes('@') && password.length >= 6
      ? setIsValid(true)
      : setIsValid(false)
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setPassword(password)
    email.includes('@') && password.length >= 6
      ? setIsValid(true)
      : setIsValid(false)
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <p>이메일</p>
        <input
          placeholder="이메일 형식으로 입력해주세요"
          value={email}
          onChange={handleEmailInput}
        ></input>
        <p>비밀번호</p>
        <input
          type="password"
          placeholder="비밀번호를 6자 이상으로 입력해주세요"
          value={password}
          onChange={handlePasswordInput}
          minLength={6}
        ></input>
        <div>
          <button
            type="submit"
            disabled={!isValid}
            onClick={handleLoginButtonClick}
          >
            로그인
          </button>
          <button onClick={googleLogin}>Google로 로그인하기</button>
          <button onClick={kakaoLogin}>kakao로 로그인하기</button>
          <button onClick={() => navigate('/Join')}>회원가입</button>
        </div>
      </form>
    </>
  )
}

export default Signin
