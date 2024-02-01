import styled from 'styled-components';

const OpenPostModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  z-index: 10000;
`;
const OpenPostModalBox = styled.div`
  background-color: #2a2a2a;
  width: 1192px;
  height: 700px;
  color: white;
`;
const OpenPostModalContent = styled.div`
  background-color: #2a2a2a;
  flex: 1;
  display: flex;
`;
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
const OnlyTextContentHeader = styled.div`
  background-color: #2a2a2a;
  height: 28px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const OnlyTextContentUserInfo = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OnlyTextContentUserImg = styled.img`
  background-color: #2a2a2a;
  height: 28px;
  margin-right: 10px;
`;
const OnlyTextContentUserName = styled.p`
  background-color: #2a2a2a;
  height: 16px;
  font-size: 13px;
  vertical-align: middle;
  margin-top: 8px;
`;
const OnlyTextContentDateTimeDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  margin-top: 8px;
`;
const OnlyTextContentTime = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  margin-right: 10px;
  height: 16px;
`;
const OnlyTextContentDate = styled.p`
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
const OnlyTextContentBtnImgDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OnlyTextContentHeartImgDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OnlyTextContentHeartImg = styled.img`
  background-color: #2a2a2a;
  height: 20px;
`;
const OnlyTextContentCommentImg = styled.img`
  background-color: #2a2a2a;
  height: 20px;
`;
const OnlyTextContentHeartCountP = styled.p`
  background-color: #2a2a2a;
  font-size: 14px;
  margin-top: 2px;
  margin-left: 4px;
  margin-right: 20px;
`;

// comment
const CommentDiv = styled.div`
  background-color: #2a2a2a;
  padding: 20px 40px;
  height: 376px;
`;

// add comment
const AddCommentDiv = styled.form`
  background-color: #2a2a2a;
  height: 68px;
  width: 100%;
  padding: 20px 40px;
  display: flex;
`;
const AddCommentImg = styled.img`
  background-color: #2a2a2a;
  height: 24px;
  margin-right: 10px;
`;
const AddCommentTextArea = styled.textarea`
  background-color: #2a2a2a;
  width: 1026px;
  height: 28px;
`;
export default {
  OpenPostModalContainer,
  OpenPostModalBox,
  OpenPostModalContent,
  OnlyTextTitle,
  OnlyTextContentDiv,
  OnlyTextContentUserInfo,
  OnlyTextContentHeader,
  OnlyTextContentUserImg,
  OnlyTextContentUserName,
  OnlyTextContentDateTimeDiv,
  OnlyTextContentTime,
  OnlyTextContentDate,
  OnlyTextContentP,
  OnlyTextContentBtnImgDiv,
  OnlyTextContentHeartImgDiv,
  OnlyTextContentHeartImg,
  OnlyTextContentHeartCountP,
  OnlyTextContentCommentImg,
  CommentDiv,
  AddCommentDiv,
  AddCommentImg,
  AddCommentTextArea,
};
