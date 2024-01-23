import styled from 'styled-components';

const LikeBtnImg = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;

  position: absolute;
  left: ${props => props.$left};
  bottom: 8%;

  cursor: pointer;
`;

export default {LikeBtnImg};
