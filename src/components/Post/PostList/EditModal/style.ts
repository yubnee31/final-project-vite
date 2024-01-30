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
  width: 992px;
  height: 700px;
  color: white;
`;
const EditPostModalContent = styled.form`
  background-color: #2a2a2a;
`;
const EditPostModalTitle = styled.p`
  background-color: #2a2a2a;
  text-align: center;
  font-size: 20px;
  height: 24px;
  width: 300px;
  margin: 20px 306px 0 306px;
`;
const EditPosModalArtistName = styled.p`
  background-color: #2a2a2a;
  text-align: center;
  font-size: 14px;
  height: 18px;
  width: 300px;
  margin: 6px 306px 20px 306px;
`;
const EditPostModalInput = styled.textarea`
  background-color: #2a2a2a;
  border: none;

  width: 912px;
  height: 343px;
  margin: 0 40px 20px 40px;
`;
const EditPostModalBtnDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  margin-left: 560px;
  margin-right: 40px;
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
  EditPostModalTitle,
  EditPosModalArtistName,
  EditPostModalInput,
  EditPostModalBtnDiv,
  EditPostModalBtn,
};
