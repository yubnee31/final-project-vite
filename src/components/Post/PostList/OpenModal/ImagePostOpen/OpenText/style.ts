import styled from 'styled-components';

const OpenTextWrap = styled.div`
  background-color: #2a2a2a;
  flex-basis: 50%;
  width: 476px;
  height: 650px;

  @media screen and (max-width: 1000px) {
    width: 350px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
  }
`;

// content
const OpenTextTitleCloseDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OpenTextTitle = styled.div`
  background-color: #2a2a2a;
  font-size: 20px;
  text-align: center;
  width: 80px;
  height: 24px;
  margin: 30px 144px 20px 190px;

  @media screen and (max-width: 1000px) {
    margin: 30px 81px 20px 127px;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
    width: 65px;
    margin: 14px 83px 14px 128px;
    padding-top: 4px;
  }
`;
const OpenTextCloseImg = styled.img`
  background-color: #2a2a2a;
  text-align: center;
  width: 46px;
  height: 46px;
  margin: 15px 20px 10px 0;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    width: 24px;
    height: 24px;
    margin: 14px 20px 14px 0;
  }
`;
const OpenTextBox = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: 230px;
  padding: 20px;
  border-bottom: 1px solid rgba(99, 99, 102, 0.5);
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 180px;
  }
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

  @media screen and (max-width: 700px) {
    width: 24px;
    height: 24px;
  }
`;
const OpenTextUserName = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  height: 16px;
  width: 200px;
  margin: 6px 0 6px 10px;

  @media screen and (max-width: 1000px) {
    width: 100px;
  }

  @media screen and (max-width: 700px) {
    font-size: 10px;
    width: 100px;
    margin-top: 6px;
  }
`;
const OpenTextTimeDateDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OpenTextTimeP = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  margin: 6px 0;

  @media screen and (max-width: 700px) {
    font-size: 10px;
    margin-top: 4px;
  }
`;
const OpenTextDateP = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  margin: 6px 0 6px 10px;

  @media screen and (max-width: 700px) {
    font-size: 10px;
    margin-top: 4px;
  }
`;
const OpenTextContentP = styled.p`
  background-color: #2a2a2a;
  height: 100px;
  margin: 20px 0;
  overflow-y: auto;

  @media screen and (max-width: 700px) {
    font-size: 13px;
    overflow-y: auto;
    height: 50px;
  }
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

  @media screen and (max-width: 700px) {
    height: 16px;
  }
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
  height: 285.5px;
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
  padding: 20px;
  height: 80px;
`;
const OpenTextAddCommentUserImg = styled.img`
  background-color: #2a2a2a;
  height: 20px;
  margin-bottom: 10px;
`;
const OpenTextAddCommentTextarea = styled.textarea`
  background-color: #2a2a2a;
  width: 360px;
  height: 40px;
  border: none;
  resize: none;
  margin-left: 10px;

  @media screen and (max-width: 1000px) {
    width: 240px;
  }
`;
const OpenTextAddCommentBtn = styled.button`
  background-color: #2a2a2a;
  color: #9747ff;
  border: none;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  width: 43px;
  position: fixed;
  &:disabled {
    color: white;
  }
  &:hover {
    cursor: pointer;
  }
`;
export default {
  OpenTextWrap,
  OpenTextTitleCloseDiv,
  OpenTextTitle,
  OpenTextCloseImg,
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
