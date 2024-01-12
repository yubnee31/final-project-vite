import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { supabase } from '../../../api/supabase';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  console.log('posts', posts);

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*');
    setPosts(data);
    console.log('setPosts', posts);
};

  return (
    <>
      <div>
        {posts.map((post) => {
          return <>
            <Stul key={post}>
              <li>{post.userid}</li>
              <li>{post.content}</li>
              <li>{post.timestemp}</li>
            </Stul>
          </>
        })}
      </div>
    </>
  )
}

export default PostList

const Stul = styled.ul`
    margin-top: 100px;
`