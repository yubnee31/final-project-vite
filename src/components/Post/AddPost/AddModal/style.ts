import styled from 'styled-components';

const ModalContainer = styled.div`
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
const ModalBox = styled.div`
  background-color: #2a2a2a;
  width: 852px;
  height: 510px;
  color: white;
`;
const ModalContent = styled.form`
  background-color: #2a2a2a;
`;
const ModalHeader = styled.div`
  background-color: #2a2a2a;
`;
const ModalTitle = styled.p`
  background-color: #2a2a2a;
  font-size: 20px;
  margin: 20px 326px 0 370px;
`;
const ModalArtistName = styled.p`
  background-color: #2a2a2a;
  font-size: 14px;
  margin: 6px 380px 0 380px;
`;
const ModalContentInput = styled.input`
  background-color: #2a2a2a;
  border: none;

  width: 772px;
  height: 334px;
  margin: 20px 40px;
`;
const ModalBtnDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 40px;
`;
const ModalAddPostBtn = styled.button`
  background-color: #636366;
  border: none;
  border-radius: 5px;
  /* color; #aeaeb2; */
  width: 120px;
  height: 42px;
  &:hover {
    background-color: #7d37df;
  }
`;

export default {
  ModalContainer,
  ModalBox,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalArtistName,
  ModalContentInput,
  ModalBtnDiv,
  ModalAddPostBtn,
};
