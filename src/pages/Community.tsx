import React from 'react'
import styled from 'styled-components'

const Community = () => {
  return (
    <StWrapper>
      <StBannerDiv>

      </StBannerDiv>
      <StInfoDiv>

      </StInfoDiv>
      <StPostDiv>

      </StPostDiv>
    </StWrapper>
  )
}

const StWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const StBannerDiv = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 400px;

  border-radius: 15px;
`
const StInfoDiv = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 150px;
`
const StPostDiv = styled.div`
  border: 1px solid red;
  width: 800px;
  height: 1200px;
`



export default Community