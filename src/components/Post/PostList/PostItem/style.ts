import styled from 'styled-components';

const PostLiAndToggleDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;

// PostList
const PostLi = styled.li`
  padding: 20px 0;
  min-height: 170px;
  max-height: 676px;
  position: relative;
  border-bottom: 1px solid gray;
`;
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PostUserInfoDiv = styled.div`
  display: flex;
`;
const PostUserImg = styled.img`
  height: 36px;
  border-radius: 40px;
`;
const PostNameP = styled.p`
  height: 18px;
  width: 300px;
  font-size: 14px;
  margin: 9px 0 9px 10px;
`;
const PostTimeDiv = styled.div`
  display: flex;
`;
const PostTimeP = styled.p`
  font-size: 13px;
  color: #aeaeb2;
  margin-left: 10px;
  margin: 10px 0 10px 10px;
`;
const PostContentsP = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 952px;
  height: 50px;

  cursor: pointer;

  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 20px;
  height: 39.5px;
`;
const PostContentImgDiv = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  object-fit: cover;
  background-size: cover;
  margin-bottom: 20px;
  width: 952px;
  height: 476px;

  cursor: pointer;
`;
const PostContentImg = styled.img`
  width: 952px;
  height: 476px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PostLikeCommentMoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PostLikeCommentDiv = styled.div`
  background-color: transparent;
  display: flex;
`;
const CommentImg = styled.img`
  background-color: transparent;
  width: 27px;
  height: 27px;
  margin-left: 40px;

  cursor: pointer;
`;
const PostMoreImg = styled.img`
  background-color: transparent;
  width: 28px;

  cursor: pointer;
`;
const PostBtnDiv = styled.div`
  width: 200px;
  height: 93px;
  margin-left: 10px;
`;
const PostBtn = styled.button`
  width: 200px;
  height: 46px;
  font-size: 14px;
  border: 1px solid white;

  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default {
  PostLiAndToggleDiv,
  PostLi,
  PostHeader,
  PostUserInfoDiv,
  PostUserImg,
  PostNameP,
  PostTimeP,
  PostTimeDiv,
  PostContentImgDiv,
  PostBtnDiv,
  PostLikeCommentMoreDiv,
  PostLikeCommentDiv,
  PostBtn,
  PostContentsP,
  PostContentImg,
  PostMoreImg,
  CommentImg,
};
