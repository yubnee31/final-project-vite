import React from 'react';
import St from './style';
import OpenContent from './OpenContent';
import OpenComment from './OpenComment';

const OpenPostModal = ({handleModal, currentUser}) => {
  return (
    <>
      <St.OpenPostModalContainer onClick={handleModal}>
        <St.OpenPostModalBox
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <St.OpenPostModalContent>
            <OpenContent currentUser={currentUser} />
            <OpenComment />
          </St.OpenPostModalContent>
        </St.OpenPostModalBox>
      </St.OpenPostModalContainer>
    </>
  );
};

export default OpenPostModal;
