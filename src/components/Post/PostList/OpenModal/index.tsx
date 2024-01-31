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
          {modalData.photo_url.length ? (
            <St.OpenPostModalContent>
              <OpenContent currentUser={currentUser} modalData={modalData} />
              <OpenComment currentUser={currentUser} modalData={modalData} />
            </St.OpenPostModalContent>
          ) : (
            <>
              <St.OnlyTextTitle>게시된 글</St.OnlyTextTitle>
              <St.OnlyTextContentDiv>
                <St.OnlyTextContentImg>유저 이미지</St.OnlyTextContentImg>
                <p>닉네임</p>
                <p>시간</p>
                <p>날짜</p>
                <p>내용</p>
              </St.OnlyTextContentDiv>
              <div>
                <p>유저 이미지</p>
                <p>닉네임</p>
                <p>시간</p>
                <p>날짜</p>
                <p>내용</p>
              </div>
              <div>
                <p>댓글달기</p>
              </div>
            </>
          )}
        </St.OpenPostModalBox>
      </St.OpenPostModalContainer>
    </>
  );
};

export default OpenPostModal;
