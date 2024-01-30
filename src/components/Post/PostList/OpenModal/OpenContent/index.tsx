import React from 'react';
import St from './style';

const OpenContent = ({modalData}: any) => {
  return (
    <St.OpenContentModalContainer>
      <St.OpenContentModalImg src={modalData.photo_url} alt="사진 추가" />
    </St.OpenContentModalContainer>
  );
};

export default OpenContent;
