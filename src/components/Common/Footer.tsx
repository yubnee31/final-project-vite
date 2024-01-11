import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StWrapper>
      {/* Policy */}
      <StDiv>
        <StUl>
          <StLi>이용약관</StLi>
          <StLi>서비스운영정책</StLi>
          <StLi>청소년 보호 정책</StLi>
          <StLi>개인정보처리방침</StLi>
          <StLi>쿠키정책</StLi>
          <StLi>쿠키 설정</StLi>
        </StUl>

      </StDiv>
      <StInfoWrapper>
        <StInfoDiv>
          <StInfoSpan>©AIdol COMPANY Inc.Ver.1.0.0</StInfoSpan>
        </StInfoDiv>
      </StInfoWrapper>
      {/* Info */}


    </StWrapper>
  )
}


const StWrapper = styled.div`
height: 200px;
width: 100vw;
background-color: black;

color: gray;
`
// Policy
const StDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
const StUl = styled.ul`
width: 1400px;

border-top: 2px solid gray;
border-bottom: 2px solid #1d1d1d;
display: flex;
`
const StLi = styled.li`
margin-top: 25px;
margin-bottom: 25px;
padding-right: 50px;
cursor: pointer;
`
// Info

const StInfoWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const StInfoDiv = styled.div`
width: 1400px;
margin-top: 30px;
`

const StInfoSpan = styled.span`
`


export default Footer