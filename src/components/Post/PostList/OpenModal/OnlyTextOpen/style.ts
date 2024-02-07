import styled from 'styled-components';

const OnlyTextTitleCloseDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OnlyTextTitle = styled.div`
  background-color: #2a2a2a;
  font-size: 24px;
  text-align: center;
  height: 24px;
  width: 300px;
  margin: 30px 140px 0 226px;

  @media screen and (max-width: 1000px) {
    width: 100px;
    margin: 30px 213px 0 299px;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
    width: 65px;
    margin: 14px 83px 14px 128px;
    padding-top: 4px;
  }
`;
const OnlyTextCloseImg = styled.img`
  background-color: #2a2a2a;
  text-align: center;
  width: 46px;
  height: 46px;
  margin: 15px 40px 15px 0;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    width: 24px;
    height: 24px;
    margin: 14px 20px 14px 0;
  }
`;
const OnlyTextContentDiv = styled.div`
  background-color: #2a2a2a;
  height: 180px;
  width: 100%;
  padding: 20px 40px 20px 40px;
  border-bottom: 1px solid rgba(99, 99, 102, 0.5);

  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`;
const OnlyTextHeader = styled.div`
  background-color: #2a2a2a;
  height: 28px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const OnlyTextUserInfo = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OnlyTextUserImg = styled.img`
  background-color: #2a2a2a;
  height: 28px;
  margin-right: 10px;

  @media screen and (max-width: 700px) {
    width: 24px;
    height: 24px;
  }
`;
const OnlyTextUserName = styled.p`
  background-color: #2a2a2a;
  height: 16px;
  width: 300px;
  font-size: 13px;
  vertical-align: middle;
  margin-top: 8px;

  @media screen and (max-width: 700px) {
    font-size: 10px;
    width: 100px;
    margin-top: 6px;
  }
`;
const OnlyTextDateTimeDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  margin-top: 8px;

  @media screen and (max-width: 700px) {
    margin-top: 4px;
  }
`;
const OnlyTextTime = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  margin-right: 10px;
  height: 16px;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;
const OnlyTextDate = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  height: 16px;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;
const OnlyTextContentP = styled.p`
  background-color: #2a2a2a;
  height: 50px;
  margin: 20px 0 20px 0;
  overflow-y: auto;

  @media screen and (max-width: 700px) {
    font-size: 13px;
    overflow-y: auto;
  }
`;
const OnlyTextBtnImgDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
`;
const OnlyTextHeartCommentBtnDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OnlyTextHeartImgDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OnlyTextHeartImg = styled.img`
  background-color: #2a2a2a;
  height: 20px;

  @media screen and (max-width: 700px) {
    height: 16px;
  }
`;
const OnlyTextHeartCountP = styled.p`
  background-color: #2a2a2a;
  font-size: 14px;
  margin-top: 2px;
  margin-left: 4px;
  margin-right: 20px;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    margin-top: 2px;
    margin-left: 4px;
    margin-right: 15px;
  }
`;
const OnlyTextContentCommentImg = styled.img`
  background-color: #2a2a2a;
  height: 28px;

  @media screen and (max-width: 700px) {
    height: 16px;
  }
`;
const OnlyTextDeleteBtn = styled.button`
  background-color: #636366;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: #7d37df;
  }
`;

// comment
const CommentUl = styled.div`
  background-color: #2a2a2a;
  height: 335px;
  width: 100%;
  overflow-y: auto;

  @media screen and (max-width: 700px) {
    height: 190px;
  }
`;
const CommentLi = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: 140px;
  padding: 20px 40px;

  @media screen and (max-width: 700px) {
    padding: 10px 20px;
    height: 132px;
  }
`;
const CommentP = styled.p`
  background-color: #2a2a2a;
  height: 15px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    height: 25px;
  }
`;

// add comment
const AddCommentDiv = styled.form`
  background-color: #2a2a2a;
  height: 68px;
  width: 100%;
  padding: 20px 40px;
  display: flex;

  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`;
const AddCommentUserImg = styled.img`
  background-color: #2a2a2a;
  height: 24px;
  margin-right: 10px;

  @media screen and (max-width: 700px) {
    margin-top: 5px;
    height: 20px;
  }
`;
const AddCommentInput = styled.input`
  background-color: #2a2a2a;
  border: none;
  width: 770px;
  height: 28px;
  margin-right: 20px;

  @media screen and (max-width: 1000px) {
    width: 517px;
  }

  @media screen and (max-width: 700px) {
    width: 195px;
    font-size: 8.5px;
  }
`;
const AddCommentBtn = styled.button`
  background-color: #2a2a2a;
  border: none;
  height: 28px;
  width: 48px;
  font-size: 16px;
  font-weight: bold;
  color: #b746ec;
  &:disabled {
    color: white;
  }
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    width: 35px;
    font-size: 13px;
  }
`;

export default {
  OnlyTextTitleCloseDiv,
  OnlyTextTitle,
  OnlyTextCloseImg,
  OnlyTextContentDiv,
  OnlyTextUserInfo,
  OnlyTextHeader,
  OnlyTextUserImg,
  OnlyTextUserName,
  OnlyTextDateTimeDiv,
  OnlyTextTime,
  OnlyTextDate,
  OnlyTextContentP,
  OnlyTextBtnImgDiv,
  OnlyTextHeartCommentBtnDiv,
  OnlyTextHeartImgDiv,
  OnlyTextHeartImg,
  OnlyTextHeartCountP,
  OnlyTextContentCommentImg,
  OnlyTextDeleteBtn,
  CommentUl,
  CommentLi,
  CommentP,
  AddCommentDiv,
  AddCommentUserImg,
  AddCommentInput,
  AddCommentBtn,
};
