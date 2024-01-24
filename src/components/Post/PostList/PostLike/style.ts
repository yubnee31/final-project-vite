import styled from 'styled-components';

const LikeBtnImg = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;

  position: absolute;
  left: ${props => props.$left};
  bottom: 8%;

  cursor: pointer;
`;

const LikeBtnDiv = styled.div`
  width: 25px;
  height: 25px;
`;

const LikeCountP = styled.p`
  position: absolute;
  left: 3%;
  bottom: 10%;
  width: 10px;
  height: 10px;
`;

export default {LikeBtnImg, LikeBtnDiv, LikeCountP};
