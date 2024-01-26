import React from 'react';
import St from './style';
import OpenContent from './OpenContent';
import OpenComment from './OpenComment';

const OpenPostModal = ({handleModal, currentUser, modalData}: any) => {
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
            <OpenComment currentUser={currentUser} modalData={modalData} />
          </St.OpenPostModalContent>
        </St.OpenPostModalBox>
      </St.OpenPostModalContainer>
    </>
  );
};

export default OpenPostModal;
