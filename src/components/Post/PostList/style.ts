import styled from 'styled-components';

// PostList
const PostDiv = styled.div`
  width: 952px;
  margin-top: 20px;
  margin-bottom: 80px;
`;
const PostUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-auto-rows: 180px; */
`;

export default {
  PostDiv,
  PostUl,
};
