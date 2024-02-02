import styled from 'styled-components';

const OpenTextWrap = styled.div`
  background-color: #2a2a2a;
  flex-basis: 50%;
  height: 800px;
  width: 596px;
`;

// content
const OpenTextTitle = styled.div`
  background-color: #2a2a2a;
  font-size: 20px;
  text-align: center;
  width: 80px;
  height: 24px;
  margin: 31px 258px 21px 258px;
`;
const OpenTextBox = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: 230px;
  padding: 20px;
  border-bottom: 1px solid rgba(99, 99, 102, 0.5);
`;
const OpenTextContentHeader = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const OpenTextUserInfo = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OpenTextUserImg = styled.img`
  background-color: #2a2a2a;
  height: 28px;
`;
const OpenTextUserName = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  height: 16px;
  width: 300px;
  margin: 6px 0 6px 10px;
`;
const OpenTextTimeDateDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OpenTextTimeP = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  margin: 6px 0;
`;
const OpenTextDateP = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  margin: 6px 0 6px 10px;
`;
const OpenTextContentP = styled.p`
  background-color: #2a2a2a;
  height: 100px;
  margin: 20px 0;
`;
const OpenTextImgsDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OpenTextLikeBtnDiv = styled.div`
  background-color: #2a2a2a;
  width: 20px;
  display: flex;
  margin-right: 20px;
`;
const OpenTextLikeImg = styled.img`
  background-color: #2a2a2a;
  width: inherit;
  height: inherit;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;
  margin-right: 4px;

  cursor: pointer;
`;
const OpenTextLikeCountP = styled.p`
  background-color: #2a2a2a;
  font-size: 14px;
  height: 18px;
  padding: 2px 0;
`;
const OpenTextCommentDiv = styled.div`
  background-color: #2a2a2a;
  width: 20px;
  height: 20px;
  display: flex;
`;
const OpenTextCommentImg = styled.img`
  background-color: #2a2a2a;
  height: 20px;

  cursor: pointer;
`;

// comment
const OpenTextCommentUl = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: 405px;
  overflow-y: auto;
`;
const OpenTextCommentLi = styled.div`
  width: 100%;
  height: 143px;
  padding: 20px;
  background-color: #2a2a2a;
  overflow-y: auto;
`;
const OpenTextCommentP = styled.p`
  background-color: #2a2a2a;
  margin: 10px;
  height: 35px;
  overflow-y: auto;
`;
const OpenTextCommentImgsDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
`;
const CommentDeleteaBtn = styled.button`
  background-color: #636366;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: #7d37df;
  }
`;

// add comment
const OpenTextAddCommentForm = styled.div`
  background-color: #2a2a2a;
  padding: 20px 40px;
  height: 80px;
`;
const OpenTextAddCommentUserImg = styled.img`
  background-color: #2a2a2a;
  height: 20px;
  margin-bottom: 10px;
`;
const OpenTextAddCommentTextarea = styled.textarea`
  background-color: #2a2a2a;
  width: 440px;
  height: 40px;
  border: none;
  resize: none;
  margin-left: 10px;
`;
const OpenTextAddCommentBtn = styled.button`
  background-color: #2a2a2a;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  width: 43px;
  position: fixed;
  &:hover {
    color: #9747ff;
    cursor: pointer;
  }
`;
export default {
  OpenTextWrap,
  OpenTextTitle,
  OpenTextBox,
  OpenTextContentHeader,
  OpenTextUserInfo,
  OpenTextUserImg,
  OpenTextUserName,
  OpenTextTimeDateDiv,
  OpenTextTimeP,
  OpenTextDateP,
  OpenTextContentP,
  OpenTextImgsDiv,
  OpenTextLikeBtnDiv,
  OpenTextLikeImg,
  OpenTextLikeCountP,
  OpenTextCommentDiv,
  OpenTextCommentImg,
  OpenTextCommentUl,
  OpenTextCommentLi,
  CommentDeleteaBtn,
  OpenTextCommentP,
  OpenTextCommentImgsDiv,
  OpenTextAddCommentForm,
  OpenTextAddCommentUserImg,
  OpenTextAddCommentTextarea,
  OpenTextAddCommentBtn,
};
