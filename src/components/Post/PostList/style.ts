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


export default { PostDiv, PostUl, PostLi, PostNameP, PostContentsP, PostTimeP, PostImg } 