import styled from 'styled-components';

const Footer = () => {
  return (
    <StWrapper>
      {/* Policy */}
      <StDiv>
        <StUl>
          <StLi>이용약관</StLi>
          <StLi>서비스운영정책</StLi>
          <StLi>청소년 보호 정책</StLi>
          <StLi>개인정보처리방침</StLi>
          <StLi>쿠키정책</StLi>
          <StLi>쿠키 설정</StLi>
        </StUl>
      </StDiv>
      <StInfoWrapper>
        <StInfoDiv>
          <StInfoSpan>©AIdol COMPANY Inc.Ver.1.0.0</StInfoSpan>
        </StInfoDiv>
      </StInfoWrapper>
      {/* Info */}
    </StWrapper>
  );
};

const StWrapper = styled.div`
  height: 200px;
  width: 100vw;
  background-color: black;

  color: gray;
`;
// Policy
const StDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StUl = styled.ul`
  width: 1440px;

  border-top: 2px solid gray;
  border-bottom: 2px solid #1d1d1d;
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const StLi = styled.li`
  margin-top: 25px;
  margin-bottom: 25px;
  padding-right: 50px;
  cursor: pointer;
  color: #bdbdbd;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 10px;
    float: left;
  }
`;
// Info

const StInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StInfoDiv = styled.div`
  width: 1440px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const StInfoSpan = styled.span`
  color: #bdbdbd;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 20px;
  }
`;

export default Footer;
