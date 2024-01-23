import styled from 'styled-components'

// PostList
const PostDiv = styled.div`
  width: 800px;
  height: 1200px;
  margin-top: 40px;
`
const PostUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 150px;
`
const PostLi = styled.li`
  margin-bottom: 20px;
  position: relative;
  border-bottom: 1px solid gray;
  
`
const PostNameP = styled.p`
  position: absolute;
  left: 1%;
  top: 1%;
`
const PostUploadImg = styled.img`
  background-color: green;
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;
`
const PostContentsP = styled.p`
  position: absolute;
  left: 1%;
  top: 25%;

  width: 750px;
  height: 50px;

`
const PostTimeP = styled.p`
  position: absolute;
  right: ${(props) => props.$right};
  top: 1%;
  color: gray;
`
const PostImg = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  background-size: cover;
  background-color: transparent;

  position: absolute;
  left: ${(props) => props.$left};
  bottom: 8%;

  cursor: pointer;
`
const PostBtnDiv = styled.div`
  margin-top: 95px;
  margin-left: 600px;
  margin-right: 30px;
`
const PostBtn = styled.button`
  width: 80px;
  height: 20px;
  border: 1px solid white;
  margin-right: 3px;

  cursor: pointer;
`

// EditModal
const EditPostModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`
const EditPostModalBox = styled.div`
  background-color: #2a2a2a;
  width: 852px;
  height: 550px;
  color: white;
`
const EditPostModalContent = styled.form`
  background-color: #2a2a2a;
`
const EditPostModalTitle = styled.p`
  background-color: #2a2a2a;
  font-size: 20px;
  margin: 20px 326px 0 370px;
`
const EditPosModalArtistName = styled.p`
  background-color: #2a2a2a;
  font-size: 14px;
  margin: 6px 380px 0 390px;
`
const EditPostModalInput = styled.input`
  background-color: #2a2a2a;
  width: 772px;
  height: 334px;
  margin: 20px 40px;
`
const EditPostModalBtnDiv = styled.div`
  background-color: #2a2a2a;
  display: flex;
  /* justify-content: space-between; */
  margin-left: 560px;
  margin-right: 40px;
`
const EditPostModalBtn = styled.button`
  background-color: #636366;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  /* color; #aeaeb2; */
  width: 120px;
  height: 42px;
  &:hover {
    background-color: #7d37df;
  }
`

export default { PostDiv, PostUl, PostLi, PostNameP, PostUploadImg, PostBtnDiv, PostBtn, PostContentsP, PostTimeP, PostImg,
  EditPostModalContainer, EditPostModalBox, EditPostModalContent, EditPostModalTitle, EditPosModalArtistName, EditPostModalInput, EditPostModalBtnDiv, EditPostModalBtn } 