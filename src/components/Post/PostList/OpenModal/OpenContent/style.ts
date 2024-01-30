import styled from 'styled-components';

const OpenContentModalContainer = styled.div`
  background-color: #2a2a2a;
  flex-basis: 65%;
`;
const OpenContentModalTitle = styled.p`
  background-color: #2a2a2a;
  font-size: 23pxx;
  text-align: center;
  margin: 10px;
`;
const OpenContentModalHeader = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px 10px;
`;
const OpenContentModalUserName = styled.p`
  background-color: #2a2a2a;
  font-size: 20px;
`;
const OpenContentModalDateDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  margin-top: 5px;
`;
const OpenContetnModalDateP = styled.p`
  background-color: #2a2a2a;
`;
const OpenContentModalTimeP = styled.p`
  background-color: #2a2a2a;
  margin-left: 10px;
`;
const OpenContentModalContent = styled.div`
  background-color: #2a2a2a;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 400px;
  padding: 10px;
`;
const OpenContentModalLikeImg = styled.img`
  background-color: #2a2a2a;
  width: inherit;
  height: inherit;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;
  margin: 10px;

  cursor: pointer;
`;
const OpenContentModalLikeBtnDiv = styled.div`
  background-color: #2a2a2a;
  width: 25px;
  height: 25px;
  display: flex;
`;

const OpenContentModalLikeCountP = styled.p`
  background-color: #2a2a2a;
  width: 10px;
  height: 10px;
  margin-top: 13px;
`;

export default {
  OpenContentModalContainer,
  OpenContentModalTitle,
  OpenContentModalHeader,
  OpenContentModalUserName,
  OpenContentModalDateDiv,
  OpenContetnModalDateP,
  OpenContentModalTimeP,
  OpenContentModalContent,
  OpenContentModalLikeBtnDiv,
  OpenContentModalLikeImg,
  OpenContentModalLikeCountP,
};
