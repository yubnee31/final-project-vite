import styled from 'styled-components';

const EditPostModalContainer = styled.div`
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
const EditPostModalBox = styled.div`
  background-color: #2a2a2a;
  width: 952px;
  height: 650px;
  color: white;
`;
const EditPostModalContent = styled.form`
  background-color: #2a2a2a;
`;
const EditModalHeaderBody = styled.div`
  background-color: #2a2a2a;
  height: 503px;
`;
const EditPostModalHeader = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const EditPostModalTitleDiv = styled.div`
  background-color: #2a2a2a;
`;
const EditPostModalTitle = styled.p`
  background-color: #2a2a2a;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  width: 300px;
  margin: 20px 240px 0 326px;
`;
const EditPosModalArtistName = styled.p`
  background-color: #2a2a2a;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  width: 300px;
  margin: 6px 240px 20px 326px;
`;
const EditPostModalCloseBtn = styled.img`
  background-color: #2a2a2a;
  text-align: center;
  width: 46px;
  height: 46px;
  margin: 20px 40px 20px 0;
  cursor: pointer;
`;
const EditPostModalInput = styled.textarea`
  background-color: #2a2a2a;
  border: none;
  resize: none;

  width: 100%;
  height: 303px;
  padding: 0 40px 20px 40px;
`;
const EditPostLegsDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding: 0 40px;
`;
const EditModalSelectedImgDiv = styled.div`
  background-color: #2a2a2a;
  margin-bottom: 60px;
  margin-left: 40px;
  display: flex;
`;
const SelectedImgMap = styled.div`
  background-color: #2a2a2a;
`;
const SelectedImg = styled.img`
  position: relative;
  height: 90px;
  width: 90px;
  margin-right: 20px;
  border-radius: 5%;
`;
const SelectedImgDeleteBtn = styled.p`
  position: relative;
  background-color: #2a2a2a;
  border-radius: 10%;
  font-size: 16px;
  width: 16px;
  height: 16px;
  margin-left: 40px;

  cursor: pointer;
`;
const EditModalImgBtnLabel = styled.label`
  background-color: #2a2a2a;
  cursor: pointer;
`;
const EditModalImg = styled.img`
  background-color: #2a2a2a;
  height: 44px;
  width: 50px;
  margin-right: 20px;
`;
const EditPostModalBtnDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const EditPostModalBtn = styled.button`
  background-color: #636366;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  /* color; #aeaeb2; */
  width: 120px;
  height: 42px;
  &:hover {
    background-color: #7d37df;
  }
`;

export default {
  EditPostModalContainer,
  EditPostModalBox,
  EditPostModalContent,
  EditModalHeaderBody,
  EditPostModalHeader,
  EditPostModalTitleDiv,
  EditPostModalTitle,
  EditPosModalArtistName,
  EditPostModalCloseBtn,
  EditPostModalInput,
  EditPostLegsDiv,
  EditModalSelectedImgDiv,
  SelectedImgMap,
  SelectedImg,
  EditModalImgBtnLabel,
  EditModalImg,
  SelectedImgDeleteBtn,
  EditPostModalBtnDiv,
  EditPostModalBtn,
};
