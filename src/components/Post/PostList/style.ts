import styled from 'styled-components';

// PostList
const PostDiv = styled.div`
  width: 800px;
  margin-top: 40px;
  margin-bottom: 80px;
`;
const PostUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: repeat(auto-fit, minmax(200px, auto)) 180px;
`;

export default {
  PostDiv,
  PostUl,
};
