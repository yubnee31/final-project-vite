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

  z-index: 1000;
`;
const ModalBox = styled.div`
  background-color: #2a2a2a;
  width: 992px;
  height: 700px;
  color: white;
`;
const ModalContent = styled.form`
  background-color: #2a2a2a;
`;
const ModalHeader = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const CloseBtn = styled.img`
  background-color: #2a2a2a;
  text-align: center;
  width: 46px;
  height: 46px;
  margin: 20px 40px 20px 0;
  cursor: pointer;
`;
const ModalTitleDiv = styled.div`
  background-color: #2a2a2a;
`;
const ModalTitle = styled.p`
  background-color: #2a2a2a;
  text-align: center;
  font-size: 20px;
  height: 24px;
  width: 300px;
  margin: 20px 346px 0 300px;
`;
const ModalArtistName = styled.p`
  background-color: #2a2a2a;
  text-align: center;
  font-size: 14px;
  height: 18px;
  width: 300px;
  margin: 6px 306px 20px 306px;
`;
const ModalContentInput = styled.textarea`
  background-color: #2a2a2a;
  border: none;
  resize: none;

  width: 912px;
  height: 343px;
  margin: 0 40px 20px 40px;
`;
const SelectImgDiv = styled.div`
  background-color: #2a2a2a;
  margin-bottom: 60px;
  margin-left: 40px;
  display: flex;
`;
const imgMapDiv = styled.div`
  background-color: #2a2a2a;
`;
const SelectImg = styled.img`
  height: 90px;
  width: 90px;
  margin-right: 20px;
`;
const ModalBtnDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 60px;
`;
const ModalAddBtnLabel = styled.label`
  background-color: #2a2a2a;
`;
const ModalAddImg = styled.img`
  background-color: #2a2a2a;
  height: 44px;
  width: 50px;
  margin-right: 20px;
`;
const ModalAddPostBtn = styled.button`
  background-color: #7d37df;
  border: none;
  border-radius: 5px;
  width: 120px;
  height: 42px;
  cursor: pointer;

  &:disabled {
    background-color: #636366;
  }
`;

export default {
  ModalContainer,
  ModalBox,
  ModalContent,
  ModalHeader,
  ModalTitleDiv,
  ModalTitle,
  CloseBtn,
  ModalArtistName,
  ModalContentInput,
  SelectImgDiv,
  imgMapDiv,
  SelectImg,
  ModalAddImg,
  ModalBtnDiv,
  ModalAddBtnLabel,
  ModalAddPostBtn,
};
