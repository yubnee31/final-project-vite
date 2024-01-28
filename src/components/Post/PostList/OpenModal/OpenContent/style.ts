import styled from 'styled-components';

const OpenContentModalContainer = styled.div`
  background-color: #2a2a2a;
  flex-basis: 70%;
`;
const OpenContentModalUserName = styled.p`
  background-color: #2a2a2a;
`;
const OpenContentModalContent = styled.div``;
const OpenContentModalImg = styled.img``;

const OpenContentModalLikeImg = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;

  cursor: pointer;
`;
const OpenContentMocalLikeBtnDiv = styled.div`
  width: 25px;
  height: 25px;
`;

const OpenContentModalLikeCountP = styled.p`
  position: absolute;
  left: 3%;
  bottom: 10%;
  width: 10px;
  height: 10px;
`;
export default {
  OpenContentModalContainer,
  OpenContentModalUserName,
  OpenContentModalContent,
  OpenContentModalImg,
  OpenContentMocalLikeBtnDiv,
  OpenContentModalLikeImg,
  OpenContentModalLikeCountP,
};
