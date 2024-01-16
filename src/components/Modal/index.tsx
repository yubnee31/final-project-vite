import React from 'react';
import styled from 'styled-components';

const Modal = () => {
  return (
    <StModalDiv>
      <p>알림</p>
      <p>로그인 이후 커뮤니티에 입장하실 수 있습니다.</p>
      <p>로그인을 하시겠습니까?</p>
      <button>취소</button>
      <button>로그인</button>
    </StModalDiv>
  );
};

export default Modal;

const StModalDiv = styled.div`
  width: 300px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  border-radius: 5px;
`;
