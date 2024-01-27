import styled from 'styled-components';

export const StFollowNumDiv = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
`;

export const StDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;

export const StButton = styled.button`
  width: 120px;
  height: 42px;
  border: 1px solid #aeaeb2;
  border-radius: 5px;
  &.following {
    color: #9747ff;
    border: 1px solid #9747ff;
    transition: 0.3s;
  }
  &.follow {
    transition: 0.3s;
  }
`;

export const StBtnDiv = styled.div`
  width: 120px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding-right: 15px;
  gap: 10px;
`;

export const StFollowingP = styled.p`
  color: #9747ff;
  font-size: 16px;
`;

export const StFollowP = styled.p`
  font-size: 16px;
`;
