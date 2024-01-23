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
  width: 852px;
  height: 550px;
  color: white;
`;
const EditPostModalContent = styled.form`
  background-color: #2a2a2a;
`;
const EditPostModalTitle = styled.p`
  background-color: #2a2a2a;
  font-size: 20px;
  margin: 20px 326px 0 370px;
`;
const EditPosModalArtistName = styled.p`
  background-color: #2a2a2a;
  font-size: 14px;
  margin: 6px 380px 0 390px;
`;
const EditPostModalInput = styled.input`
  background-color: #2a2a2a;
  width: 772px;
  height: 334px;
  margin: 20px 40px;
`;
const EditPostModalBtnDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  /* justify-content: space-between; */
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
