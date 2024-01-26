import styled from 'styled-components';

const OpenPostModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
const OpenPostModalBox = styled.div`
  background-color: #2a2a2a;
  width: 852px;
  height: 510px;
  color: white;
`;
const OpenPostModalContent = styled.div`
  background-color: #2a2a2a;
  /* column-count: 2; */
  flex: 1;
  display: flex;
`;
const OpenPostModalTitle = styled.div``;
const OpenPosModalArtistName = styled.div``;
const OpenPostModalInput = styled.input``;
const OpenPostModalBtnDiv = styled.div``;
const OpenPostModalBtn = styled.button``;
export default {
  OpenPostModalContainer,
  OpenPostModalBox,
  OpenPostModalContent,
  OpenPostModalTitle,
  OpenPosModalArtistName,
  OpenPostModalInput,
  OpenPostModalBtnDiv,
  OpenPostModalBtn,
};
