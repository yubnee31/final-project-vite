import styled from 'styled-components';

const AddPostDiv = styled.div`
  width: 954px;
  height: 62px;
  border-bottom: 2px solid gray;
  display: flex;

  margin-top: 40px;
`;
const AddPostUerImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50px;
  object-fit: cover;
  background-size: cover;
`;
const AddPostMovdBox = styled.div`
  width: 735px;
  height: 50px;
  border: none;
  padding-top: 20px;
  padding-left: 10px;
  margin-left: 20px;
  color: gray;
  font-size: 16px;
  cursor: pointer;
`;

export default {AddPostDiv, AddPostUerImg, AddPostMovdBox};
