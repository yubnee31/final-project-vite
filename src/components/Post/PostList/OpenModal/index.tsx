import React from 'react';
import St from './style';
import OpenContent from './OpenContent';
import OpenComment from './OpenComment';

const OpenPostModal = () => {
  return (
    <>
      <St.OpenPostModalContainer>
        <St.OpenPostModalBox>
          <St.OpenPostModalContent>
            <OpenContent />
            <OpenComment />
          </St.OpenPostModalContent>
        </St.OpenPostModalBox>
      </St.OpenPostModalContainer>
    </>
  );
};

export default OpenPostModal;
