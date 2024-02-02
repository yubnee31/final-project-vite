import styled from 'styled-components';

const OnlyTextTitle = styled.div`
  background-color: #2a2a2a;
  font-size: 24px;
  height: 24px;
  width: 90px;
  margin: 31px 551px 21px 551px;
`;
const OnlyTextContentDiv = styled.div`
  background-color: #2a2a2a;
  height: 180px;
  width: 100%;
  padding: 20px 40px 20px 40px;
  border-bottom: 1px solid rgba(99, 99, 102, 0.5);
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
`;
const OnlyTextUserName = styled.p`
  background-color: #2a2a2a;
  height: 16px;
  width: 300px;
  font-size: 13px;
  vertical-align: middle;
  margin-top: 8px;
`;
const OnlyTextDateTimeDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  margin-top: 8px;
`;
const OnlyTextTime = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  margin-right: 10px;
  height: 16px;
`;
const OnlyTextDate = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  height: 16px;
`;
const OnlyTextContentP = styled.p`
  background-color: #2a2a2a;
  height: 50px;
  margin: 20px 0 20px 0;
  overflow-y: auto;
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
`;
const OnlyTextHeartCountP = styled.p`
  background-color: #2a2a2a;
  font-size: 14px;
  margin-top: 2px;
  margin-left: 4px;
  margin-right: 20px;
`;
const OnlyTextContentCommentImg = styled.img`
  background-color: #2a2a2a;
  height: 20px;
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
  height: 476px;
  width: 100%;
  overflow-y: auto;
`;
const CommentLi = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: 140px;
  padding: 20px 40px;
`;
const CommentP = styled.p`
  background-color: #2a2a2a;
  height: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

// add comment
const AddCommentDiv = styled.form`
  background-color: #2a2a2a;
  height: 68px;
  width: 100%;
  padding: 20px 40px;
  display: flex;
`;
const AddCommentUserImg = styled.img`
  background-color: #2a2a2a;
  height: 24px;
  margin-right: 10px;
`;
const AddCommentInput = styled.input`
  background-color: #2a2a2a;
  border: none;
  width: 1026px;
  height: 28px;
  margin-right: 20px;
`;
const AddCommentBtn = styled.button`
  background-color: #2a2a2a;
  border: none;
  height: 28px;
  width: 48px;
  font-size: 16px;
  font-weight: bold;
  color: #b746ec;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default {
  OnlyTextTitle,
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
