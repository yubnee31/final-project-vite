import React from 'react';
import St from './style';

const OpenContent = ({currentUser}: any) => {
  return (
    <St.OpenContentModalContainer>
      <St.OpenContentModalUserName>{currentUser?.user_metadata.name}</St.OpenContentModalUserName>
      <div>
        <St.OpenContentModalContent>이건 내용</St.OpenContentModalContent>
        <St.OpenContentModalImg alt="게시글 사진" />
      </div>
      <div>
        <St.OpenContentModalLike></St.OpenContentModalLike>
      </div>
    </St.OpenContentModalContainer>
  );
};

export default OpenContent;
