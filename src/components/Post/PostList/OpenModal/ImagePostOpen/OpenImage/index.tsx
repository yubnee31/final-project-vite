import React from 'react';
import St from './style';
import Slider from 'react-slick';
import './slick-theme.css';
import './slick.css';

const OpenImage = ({modalData}: any) => {
  // option
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      {modalData.photo_url.length > 1 ? (
        <Slider {...settings}>
          {modalData.photo_url &&
            modalData.photo_url.map((url, index) => {
              return <St.OpenContentModalImg key={index} src={url} />;
            })}
        </Slider>
      ) : (
        <St.OpenContentModalContainer>
          {modalData.photo_url &&
            modalData.photo_url.map((url, index) => {
              return <St.OpenContentModalImg key={index} src={url} />;
            })}
        </St.OpenContentModalContainer>
      )}
    </>
  );
};

export default OpenImage;
