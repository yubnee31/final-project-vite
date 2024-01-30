import styled from 'styled-components';

// PostList
const PostLi = styled.li`
  margin-bottom: 20px;
  position: relative;
  border-bottom: 1px solid gray;
`;
const PostUserImg = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 5px;
  border-radius: 50px;
  object-fit: cover;
  background-size: cover;
`;
const PostNameP = styled.p`
  position: absolute;
  left: 10%;
  top: 10%;
`;
const PostUploadImg = styled.img`
  background-color: green;
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;
`;
const PostContentsP = styled.p`
  position: absolute;
  left: 2%;
  top: 45%;

  width: 750px;
  height: 50px;

  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 20px;
  height: 40px;
`;
const PostContentImgDiv = styled.div`
  display: flex;
`;
const PostContentImg = styled.img`
  margin-top: 40px;
  width: 100px;
  height: 120px;
`;
const PostTimeP = styled.p`
  position: absolute;
  right: ${props => props.$right};
  top: 10%;
  color: gray;
`;
const PostImg = styled.img`
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
const CommentImg = styled.img`
  width: 27px;
  height: 27px;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;

  position: absolute;
  left: ${props => props.$left};
  bottom: 8%;

  cursor: pointer;
`;
const PostBtnDiv = styled.div`
  margin-top: 85px;
  margin-left: 810px;
  /* margin-right: 30px; */
  position: absolute;
`;
const PostBtn = styled.button`
  width: 120px;
  height: 30px;
  border: 1px solid white;
  margin-right: 10px;

  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default {
  PostLi,
  PostUserImg,
  PostNameP,
  PostContentImgDiv,
  PostUploadImg,
  PostBtnDiv,
  PostBtn,
  PostContentsP,
  PostContentImg,
  PostTimeP,
  PostImg,
  CommentImg,
};
