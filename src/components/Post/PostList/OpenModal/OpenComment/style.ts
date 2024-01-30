import styled from 'styled-components';

const CommentWrap = styled.div`
  background-color: #2a2a2a;
  flex-basis: 35%;
`;
const CommentTitle = styled.div`
  background-color: #2a2a2a;
  font-size: 18px;
  text-align: center;
  margin: 5px;
`;
const CommentUl = styled.div`
  background-color: #2a2a2a;
  border-left: 1px solid gray;
  width: 305px;
  height: 379px;
  overflow-y: auto;
`;
const CommentLi = styled.div`
  background-color: #2a2a2a;
  overflow-y: hidden;
  border: 1px solid gray;
`;
const CommentHeader = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const CommentUserNameP = styled.p`
  background-color: #2a2a2a;
  margin-left: 10px;
  margin-top: 3px;
`;
const CommentDeleteaBtn = styled.button`
  background-color: #636366;
  margin-right: 10px;
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
`;
const CommentDataDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-right: 5px;
`;
const CommentDateP = styled.p`
  background-color: #2a2a2a;
  margin-left: 185px;
  font-size: 13px;
`;
const CommentTimeP = styled.p`
  background-color: #2a2a2a;
  font-size: 12px;
  margin-left: 5px;
`;
const CommentAddForm = styled.form`
  background-color: #2a2a2a;
  position: fixed;
`;
const CommentInput = styled.input`
  background-color: #2a2a2a;
  width: 262px;
  height: 103px;
  border: 0.5px solid gray;
`;
const CommentAddBtn = styled.button`
  width: 47px;
  height: 103px;
  border: none;
  background-color: #636366;
  &:hover {
    background-color: #7d37df;
    cursor: pointer;
  }
`;
export default {
  CommentWrap,
  CommentTitle,
  CommentUl,
  CommentLi,
  CommentHeader,
  CommentUserNameP,
  CommentDeleteaBtn,
  CommentP,
  CommentDataDiv,
  CommentDateP,
  CommentTimeP,
  CommentAddForm,
  CommentInput,
  CommentAddBtn,
};
