import styled from 'styled-components';

const OpenPostModalContainer = styled.div`
  width: 99%;
  height: 99%;
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
  width: 1192px;
  height: 800px;
  color: white;
`;
const OpenPostModalContent = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;

export default {
  OpenPostModalContainer,
  OpenPostModalBox,
  OpenPostModalContent,
};
