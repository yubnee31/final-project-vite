import React from 'react';
import St from './style';

const OpenContent = ({modalData}: any) => {
  return (
    <St.OpenContentModalContainer>
      {modalData.photo_url.length &&
        modalData.photo_url.map((url, index) => {
          return <St.OpenContentModalImg key={index} src={url} />;
        })}
    </St.OpenContentModalContainer>
  );
};

export default OpenContent;
