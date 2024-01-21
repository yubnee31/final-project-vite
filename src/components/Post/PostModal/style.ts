import styled from 'styled-components'

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
const ModalBox = styled.div`
  background-color: #2a2a2a;
  width: 852px;
  height: 550px;
  color: white;
`
const ModalContent = styled.form`
  background-color: #2a2a2a;
`
const ModalTitle = styled.p`
  font-size: 20px;
  margin: 20px 326px 0 326px;
`
const ModalArtistName = styled.p`
  font-size: 14px;
  margin-top: 6px;
`
const ModalContentInput = styled.input`
  background-color: #2a2a2a;
  width: 772px;
  height: 334px;
  margin: 20px 40px;
`
const ModalAddPostBtn = styled.button`
  background-color: #636366;
  color; #aeaeb2;
  width: 120px;
  height: 42px;
`


export default { ModalContainer, ModalBox, ModalContent, ModalTitle, ModalArtistName, ModalContentInput, ModalAddPostBtn }