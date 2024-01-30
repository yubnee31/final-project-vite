import styled from 'styled-components';

const CommentWrap = styled.div`
  background-color: #2a2a2a;
  flex-basis: 48%;
`;
const CommentTitle = styled.div`
  background-color: #2a2a2a;
  font-size: 18px;
  text-align: center;
  margin: 20px;
`;
const ContentBox = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: 240px;
  padding: 20px;
  border-bottom: 1px solid rgba(99, 99, 102, 0.5);
`;
const ContentP = styled.p`
  background-color: #2a2a2a;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-y: auto;
`;
const ContentBtnsDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const heartCommentBtnDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
`;
const OpenContentModalLikeBtnDiv = styled.div`
  background-color: #2a2a2a;
  width: 20px;
  height: 20px;
  display: flex;
`;
const OpenContentModalLikeImg = styled.img`
  background-color: #2a2a2a;
  width: inherit;
  height: inherit;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;

  cursor: pointer;
`;
const OpenContentModalLikeCountP = styled.p`
  background-color: #2a2a2a;
  font-size: 14px;
  width: 10px;
  height: 10px;
  margin-left: 4px;
  margin-top: 3px;
`;
const ContentModalReplyImgDiv = styled.div`
  background-color: #2a2a2a;
  width: 20px;
  height: 20px;
  display: flex;
  margin-left: 20px;
`;
const ComentReplyImg = styled.img`
  background-color: #2a2a2a;
  width: inherit;
  height: inherit;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;

  cursor: pointer;
`;
const CommentUl = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  height: 288px;
  overflow-y: auto;
`;
const CommentLi = styled.div`
  width: 100%;
  height: 140px;
  padding: 20px;
  background-color: #2a2a2a;
  overflow-y: hidden;
`;
const CommentHeader = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
`;
const CommentProfile = styled.img`
  background-color: #2a2a2a;
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;
const CommentUserNameP = styled.p`
  background-color: #2a2a2a;
  width: 50px;
  margin-top: 13px;
  font-size: 13px;
`;
const CommentDeleteaBtn = styled.button`
  background-color: #636366;
  margin-right: 10px;
  margin-left: 375px;
  margin-top: 1px;
  border: none;
  &:hover {
    background-color: #7d37df;
    cursor: pointer;
  }
`;
const CommentP = styled.p`
  background-color: #2a2a2a;
  margin: 10px;
  height: 35px;
  overflow-y: auto;
`;
const CommentDataDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  margin-right: 5px;
`;
const CommentDateP = styled.p`
  background-color: #2a2a2a;
  margin-left: 10px;
  font-size: 13px;
`;
const CommentTimeP = styled.p`
  background-color: #2a2a2a;
  font-size: 13px;
  margin-left: 210px;
`;
const moreBtnImg = styled.img`
  background-color: #2a2a2a;
  height: 20px;
  width: 20px;
  margin-left: 380px;
  position: absolute;
`;
const CommentAddForm = styled.div`
  background-color: #2a2a2a;
  position: fixed;
  margin: 20px;
`;
const CommenAddProfile = styled.img`
  background-color: #2a2a2a;
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
  margin-right: 10px;
`;
const CommentInput = styled.textarea`
  background-color: #2a2a2a;
  width: 360px;
  height: 70px;
  border: 0.5px solid gray;
`;
const ConmmentBtnDiv = styled.div`
  background-color: #2a2a2a;
`;
const CommentAddBtn = styled.button`
  background-color: #2a2a2a;
  color: white;
  border: none;
  font-size: 16;
  font-weight: bold;
  height: 70px;
  width: 40px;
  position: fixed;
  &:hover {
    color: #9747ff;
    cursor: pointer;
  }
`;
export default {
  CommentWrap,
  CommentTitle,
  ContentBox,
  ContentP,
  ContentBtnsDiv,
  heartCommentBtnDiv,
  OpenContentModalLikeImg,
  OpenContentModalLikeBtnDiv,
  OpenContentModalLikeCountP,
  ContentModalReplyImgDiv,
  ComentReplyImg,
  CommentUl,
  CommentLi,
  CommentHeader,
  CommentProfile,
  CommentUserNameP,
  CommentDeleteaBtn,
  CommentP,
  CommentDataDiv,
  CommentDateP,
  CommentTimeP,
  moreBtnImg,
  CommentAddForm,
  CommenAddProfile,
  CommentInput,
  ConmmentBtnDiv,
  CommentAddBtn,
};
