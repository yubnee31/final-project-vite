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
  width: 952px;
  height: 650px;
  color: white;
`;
const ModalContent = styled.form`
  background-color: #2a2a2a;
`;
const ModalHeaderBodyDiv = styled.div`
  background-color: #2a2a2a;
  height: 503px;
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
  line-height: 24px;
  width: 300px;
  margin: 20px 240px 0 326px;
`;
const ModalArtistName = styled.p`
  background-color: #2a2a2a;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  width: 300px;
  margin: 6px 240px 20px 326px;
`;
const ModalContentInput = styled.textarea`
  background-color: #2a2a2a;
  border: none;
  resize: none;

  width: 100%;
  height: 303px;
  padding: 0 40px 20px 40px;
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
  position: relative;
  height: 90px;
  width: 90px;
  margin-right: 20px;
  border-radius: 5%;
`;
const SelectImgDeleteBtn = styled.p`
  position: relative;
  background-color: #2a2a2a;
  border-radius: 10%;
  font-size: 16px;
  width: 16px;
  height: 16px;
  margin-left: 40px;

  cursor: pointer;
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
  ModalHeaderBodyDiv,
  ModalHeader,
  ModalTitleDiv,
  ModalTitle,
  CloseBtn,
  ModalArtistName,
  ModalContentInput,
  SelectImgDiv,
  imgMapDiv,
  SelectImg,
  SelectImgDeleteBtn,
  ModalAddImg,
  ModalBtnDiv,
  ModalAddBtnLabel,
  ModalAddPostBtn,
};
