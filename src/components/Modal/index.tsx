import React from 'react';
import styled from 'styled-components';

const Modal = () => {
  return (
    <StModalDiv>
      <StDiv>
        <StTitle>알림</StTitle>
        <StInfo>로그인 이후 커뮤니티에 입장하실 수 있습니다.</StInfo>
        <StInfo>로그인을 하시겠습니까?</StInfo>
        <StCancelBtn>취소</StCancelBtn>
        <StLoginBtn>로그인</StLoginBtn>
      </StDiv>
    </StModalDiv>
  );
};

export default Modal;

const StModalDiv = styled.div`
  // 모달창크기
  width: 300px;
  height: 150px;
  // 최상단에 위치
  z-index: 999;
  // 중앙배치
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // 디자인
  color: white;
  background-color: #121212;
  border-radius: 10px;
  border: 1px solid #282828;
`;

const StDiv = styled.div`
  text-align: center;
  width: 300px;
  margin-top: 20px;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: transparent;
`;

const StTitle = styled.p`
  background-color: transparent;
  font-size: 15px;
  margin-bottom: 15px;
`;

const StInfo = styled.p`
  background-color: transparent;
  font-size: 12px;
  margin-bottom: 8px;
`;

const StCancelBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-top: 1px solid #282828;
  margin-top: 10px;
`;

const StLoginBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-top: 1px solid #282828;
  margin-top: 10px;
  color: #b746ec;
`;
