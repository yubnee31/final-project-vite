import styled from 'styled-components';

// Banner
const BannerDiv = styled.div`
  width: 1200px;
  height: 400px;

  border-radius: 15px;
`;
const BannerImg = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  background-size: cover;
  border-radius: 15px;
`;

// Info
const InfoDiv = styled.div`
  width: 800px;
  height: 100px;

  display: flex;

  margin-top: 50px;
`;
const InfoNameDiv = styled.div`
  border: 1px solid gray;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
  margin-right: 15px;
`;
const InfoNameP = styled.p`
  font-size: 16px;
`;
const InfoNameBtn = styled.button`
  border: none;
  border-bottom: 1px solid gray;
  color: gray;
  margin-top: 10px;
  cursor: pointer;
  font-size: 12px;
`;
const InfoFollowerDiv = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
  border-radius: 10px 0px 0px 10px;
`;
const InfoFollowingDiv = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 0px 10px 10px 0px;
`;
const InfoFollowP = styled.p`
  font-size: 17px;
`;
const FollowP = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: gray;
`;
const InfoArtistDiv = styled.div<{url: string}>`
  width: 300px;
  border-radius: 10px;
  margin-left: 15px;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  background: url(${props => props.url}) center center;
  object-fit: cover;
  background-size: cover;

  cursor: pointer;
`;
const InfoArtistP = styled.p`
  background-color: transparent;
  margin-bottom: 10px;
`;

export default {
  BannerDiv,
  BannerImg,
  InfoDiv,
  InfoNameDiv,
  InfoNameP,
  InfoNameBtn,
  InfoFollowerDiv,
  InfoFollowingDiv,
  InfoFollowP,
  FollowP,
  InfoArtistDiv,
  InfoArtistP,
};
