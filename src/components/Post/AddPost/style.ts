import styled from 'styled-components'

const InputDiv = styled.form`
  width: 800px;
  height: 60px;
  border-bottom: 2px solid gray;
  display: flex;

  margin-top: 50px;
`
const InputImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  background-size: cover;
`
const Input = styled.input`
  width: 735px;
  height: 50px;
  border: none;
  margin-left: 15px;
  font-size: 15px;
`

export default { InputDiv, InputImg, Input }