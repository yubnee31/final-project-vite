import styled from 'styled-components';

const AddPostDiv = styled.div`
  width: 800px;
  height: 60px;
  border-bottom: 2px solid gray;
  display: flex;

  margin-top: 50px;
`;
const AddPostUerImg = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 10px;
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
  margin-left: 15px;
  color: gray;
  font-size: 15px;
  cursor: pointer;
`;

export default {AddPostDiv, AddPostUerImg, AddPostMovdBox};
