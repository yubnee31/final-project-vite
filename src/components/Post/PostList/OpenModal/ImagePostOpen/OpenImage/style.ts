import styled from 'styled-components';

const OpenContentModalContainer = styled.div`
  background-color: black;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 476px;
  height: 650px;

  @media screen and (max-width: 1000px) {
    width: 350px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    flex-basis: 20%;
  }
`;
const OpenContentSliderModalImg = styled.img`
  width: 476px;
  height: 650px;
  object-fit: contain;

  @media screen and (max-width: 1000px) {
    width: 350px;
  }
`;
const OpenContentModalImg = styled.img`
  width: 476px;
  height: 650px;
  object-fit: contain;

  @media screen and (max-width: 1000px) {
    width: 350px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    height: 100px;
  }
`;
export default {
  OpenContentModalContainer,
  OpenContentSliderModalImg,
  OpenContentModalImg,
};
