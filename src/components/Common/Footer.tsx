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
      <StInfoDiv>
        {/* <div>
          <p>상호</p> <p>AIDOL COMPANY Inc.</p>
        </div>
        <div>
          <p>리더</p>
        </div>
        <p>전화번호</p>
        <p>FAX</p>
        <p>FAX</p>
        <p>주소</p>
        <p>개인정보관리책임자</p>
        <p>사업자등록번호</p> */}
      </StInfoDiv>
      <div>
        <StInfoSpan>©AIdol COMPANY Inc.Ver.1.0.0</StInfoSpan>
      </div>
      {/* Info */}
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 100vw;
  height: 200px;
  background-color: black;
  padding: 0 120px;

  color: gray;

  @media screen and (max-width: 700px) {
    width: 700px;
  }
`;
// Policy
const StDiv = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const StUl = styled.ul`
  width: 100%;

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
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
const StInfoDiv = styled.div`
  width: 100vw;
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
