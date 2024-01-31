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

  z-index: 10000;
`;
const OpenPostModalBox = styled.div`
  background-color: #2a2a2a;
  width: 992px;
  height: 700px;
  color: white;
`;
const OpenPostModalContent = styled.div`
  background-color: #2a2a2a;
  flex: 1;
  display: flex;
`;
const OnlyTextContentDiv = styled.div`
  background-color: #2a2a2a;
`;
const OnlyTextTitle = styled.div`
  background-color: #2a2a2a;
  font-size: 24px;
  height: 24px;
  width: 90px;
  margin: 31px 451px 21px 451px;
`;
const OnlyTextContentImg = styled.div``;
const OpenPostModalInput = styled.input``;
const OpenPostModalBtnDiv = styled.div``;
const OpenPostModalBtn = styled.button``;
export default {
  OpenPostModalContainer,
  OpenPostModalBox,
  OpenPostModalContent,
  OnlyTextContentDiv,
  OnlyTextTitle,
  OnlyTextContentImg,
  OpenPostModalInput,
  OpenPostModalBtnDiv,
  OpenPostModalBtn,
};
