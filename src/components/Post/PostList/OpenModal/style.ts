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
  width: 952px;
  height: 650px;
  color: white;

  @media screen and (max-width: 1000px) {
    width: 700px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    height: 494px;
  }
`;
const OpenPostModalContent = styled.div`
  background-color: #2a2a2a;
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export default {
  OpenPostModalContainer,
  OpenPostModalBox,
  OpenPostModalContent,
};
