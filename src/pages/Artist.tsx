import React, { useEffect, useState } from 'react'

import { supabase } from '../api/supabase'
import styled from 'styled-components'

const Artist = () => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await supabase.auth.getUser()
        setUserData(data.user)
      } catch (error) {
        console.error('Error fetching user information:', error.message)
      }
    }

    fetchUserInfo()
  }, [])

  return (
    <StHero>
      <StDim />
      {userData && (
        <>
          <StAtName>{userData?.full_name}</StAtName>
          {/* 이미지를 표시하는 예제로 수정 */}
          <StHeroImage
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FF7rx4ZTbYAATNkt.jpg%3Alarge&tbnid=tXoZcRiFjVI43M&vet=12ahUKEwje1oed-NaDAxUBW_UHHVwlBSEQMygAegQIARAy..i&imgrefurl=https%3A%2F%2Ftwitter.com%2FBIGHIT_MUSIC%2Fstatus%2F1709946570182205528&docid=FhgXZnoRUwspZM&w=1499&h=2048&q=F7rx4ZTbYAATNkt.jpg&ved=2ahUKEwje1oed-NaDAxUBW_UHHVwlBSEQMygAegQIARAy"
            alt="Hero Image"
          />
        </>
      )}
    </StHero>
  )
}
/* hero */
const StHero = styled.div`
  position: absolute;
  height: 720px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FF7rx4ZTbYAATNkt.jpg%3Alarge&tbnid=tXoZcRiFjVI43M&vet=12ahUKEwje1oed-NaDAxUBW_UHHVwlBSEQMygAegQIARAy..i&imgrefurl=https%3A%2F%2Ftwitter.com%2FBIGHIT_MUSIC%2Fstatus%2F1709946570182205528&docid=FhgXZnoRUwspZM&w=1499&h=2048&q=F7rx4ZTbYAATNkt.jpg&ved=2ahUKEwje1oed-NaDAxUBW_UHHVwlBSEQMygAegQIARAy);
`
const StHeroImage = styled.img`
  width: 100%; /* 이미지가 섹션에 꽉 차게 표시되도록 함 */
  height: 100%;
  object-fit: cover; /* 섹션 크기에 맞게 이미지를 자동으로 조절하여 표시함 */
`
/* Dim */
const StDim = styled.div`
  position: absolute;
  width: 1920px;
  height: 192px;
  left: 0px;
  top: 528px;

  background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%);
`

/* Artist name */

const StAtName = styled.h1`
  position: absolute;
  width: 648px;
  height: 132px;
  left: calc(50% - 648px / 2);
  top: 636px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 112px;
  line-height: 132px;
  /* identical to box height, or 118% */
  display: flex;
  align-items: center;

  color: #ffffff;
`

export default Artist
