import React from 'react'
import styled from 'styled-components'
import profileImg from '../assets/images/profile-white.png'
import heartUmg from '../assets/images/heart-white.png'
import commentImg from '../assets/images/comment-white.png'
import seeMoreImg from '../assets/images/see-more-white.png'
import { useParams } from 'react-router-dom'

const Community = () => {
  const param = useParams();
  
  const postTestData = [
      {user: 'name1', contents: 'contents1'},
      {user: 'name2', contents: 'contents2'},
      {user: 'name3', contents: 'contents3'},
      {user: 'name4', contents: 'contents4'},
      {user: 'name5', contents: 'contents5'},
      {user: 'name6', contents: 'contents6'},
  ]
  return (
    <StWrapper>
      <StBannerDiv>
        <StBannerImg  src='https://cdnimg.melon.co.kr/cm2/photo/images/000/802/42/594/80242594_20240111161428_org.jpg/melon/quality/80/optimize'/>
      </StBannerDiv>
      <StInfoDiv>
        <StInfoNameDiv>
          <StInfoNameP>닉네임</StInfoNameP>
          <StInfoNameBtn>프로필 변경하기</StInfoNameBtn>
        </StInfoNameDiv>
        <StInfoFollowerDiv>
          <StInfoFollowP>109</StInfoFollowP>
          <StFollowP>팔로워</StFollowP>
        </StInfoFollowerDiv>
        <StInfoFollowingDiv>
          <StInfoFollowP>20</StInfoFollowP>
          <StFollowP>팔로잉</StFollowP>
        </StInfoFollowingDiv>
        <StInfoArtistDiv>
          {/* <StInfoArtistImg src={toArtistTestImg}/> */}
          <StInfoArtistP>아티스트 보러가기</StInfoArtistP>
        </StInfoArtistDiv>
      </StInfoDiv>
      <StInputDiv>
        <StInputImg src={profileImg} />
        <StInput 
        placeholder='지금 아티스트에게 하고 싶은 말은?'
        />
      </StInputDiv>
      <StPostDiv>
        <StPostUl>
        {
          postTestData.map((el) => {
            return (
              <StPostLi>
                <StPostNameP>{el.user}</StPostNameP>
                <StPostContentsP>{el.contents}</StPostContentsP>
                <StPostTimeP $right={'14%'}>14:32</StPostTimeP>
                <StPostTimeP $right={'1%'}>2024.01.06.</StPostTimeP>
                <StPostImg src={heartUmg} $left={'1%'}/>
                <StPostImg src={commentImg} $left={'6.5%'}/>
                <StPostImg src={seeMoreImg} $left={'95%'}/>
              </StPostLi>
            )
          })
        }
        </StPostUl>
      </StPostDiv>
    </StWrapper>
  )
}

// Common

// Wrapper
const StWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

// Banner
const StBannerDiv = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 400px;

  border-radius: 15px; 
`
const StBannerImg = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  background-size: cover;
  border-radius: 15px; 

`

// Info
const StInfoDiv = styled.div`
  width: 800px;
  height: 100px;

  display: flex;

  margin-top: 50px;
`
const StInfoNameDiv = styled.div`
  border: 1px solid gray;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
  margin-right: 15px;
`
const StInfoNameP = styled.p`
  font-size: 16px;
`
const StInfoNameBtn = styled.button`
  border: none;
  border-bottom: 1px solid gray;
  color: gray;
  margin-top: 10px;
  cursor: pointer;
  font-size: 12px;

`
const StInfoFollowerDiv = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
  border-radius: 10px 0px 0px 10px;
`
const StInfoFollowingDiv = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 0px 10px 10px 0px;
`
const StInfoFollowP = styled.p`
  font-size: 17px;
`
const StFollowP = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: gray;
`
const StInfoArtistDiv = styled.div`
  width: 300px;
  border-radius: 10px;
  margin-left: 15px;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  background: url('../../public/optimize.jpg') center center;
  object-fit: cover;
  background-size: cover;

  cursor: pointer;
`
const StInfoArtistP = styled.p`
  background-color: transparent;
  margin-bottom: 10px;
`



// Input
const StInputDiv = styled.div`
  width: 800px;
  height: 60px;
  border-bottom: 2px solid gray;
  display: flex;

  margin-top: 50px;
`
const StInputImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  background-size: cover;
`
const StInput = styled.input`
  width: 735px;
  height: 50px;
  border: none;
  margin-left: 15px;
  font-size: 15px;
`

// Post
const StPostDiv = styled.div`
  width: 800px;
  height: 1200px;
  margin-top: 40px;

`
const StPostUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 150px;
`
const StPostLi = styled.li`
  margin-bottom: 20px;
  position: relative;
  border-bottom: 1px solid gray;
  
`
const StPostNameP = styled.p`
  position: absolute;
  left: 1%;
  top: 1%;
`
const StPostContentsP = styled.p`
  position: absolute;
  left: 1%;
  top: 25%;

  width: 750px;
  height: 50px;

`
const StPostTimeP = styled.p`
  position: absolute;
  right: ${(props) => props.$right};
  top: 1%;
`
const StPostImg = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;

  position: absolute;
  left: ${(props) => props.$left};
  bottom: 8%;

  cursor: pointer;
`


export default Community