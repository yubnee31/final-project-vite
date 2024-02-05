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
      <StInfoWrap>
        <StInfoDiv>
          <StInfoP>상호 AIDOL COMPANY Inc.</StInfoP>
        </StInfoDiv>
        <StInfoDiv>
          <StInfoP>팀이름 3조의봄</StInfoP>
        </StInfoDiv>
        <StInfoDiv>
          <StInfoP>전화번호 02{')'}0000-0000</StInfoP>
        </StInfoDiv>
        <StInfoDiv>
          <StInfoP>FAX +{')'}82-0-0000-0000</StInfoP>
        </StInfoDiv>
        <StInfoDiv>
          <StInfoP>주소 서울특별시 강남구 테헤란로44길 8</StInfoP>
        </StInfoDiv>
        <StInfoDiv>
          <StInfoP>개인정보관리책임자 3조의봄 팀 전원</StInfoP>
        </StInfoDiv>
        <StInfoDiv>
          <StInfoP>사업자등록번호 000-00-00000</StInfoP>
        </StInfoDiv>
      </StInfoWrap>
      <StCompanyNameP>©AIdol COMPANY Inc.Ver.1.0.0</StCompanyNameP>
      {/* Info */}
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 100vw;
  height: 258px;
  padding: 0 240px;
  background-color: black;
  color: #aeaeb2;

  @media screen and (max-width: 700px) {
    width: 700px;
  }
`;
// Policy
const StDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StUl = styled.ul`
  width: 100%;

  border-top: 2px solid gray;
  border-bottom: 1px solid #aeaeb2;
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const StLi = styled.li`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 65px;

  cursor: pointer;
  color: #aeaeb2;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 10px;
    float: left;
  }
`;
// Info
const StInfoWrap = styled.div`
  width: 895px;
  margin-top: 20px;
  margin-bottom: 40px;

  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
const StInfoDiv = styled.div`
  display: flex;
  margin-right: 17px;
  margin-bottom: 8px;
`;
const StInfoP = styled.p`
  font-size: 13px;
  color: #aeaeb2;
`;

const StCompanyNameP = styled.p`
  color: #aeaeb2;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 20px;
  }
`;

export default Footer;
