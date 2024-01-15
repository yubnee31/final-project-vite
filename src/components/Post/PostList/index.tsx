import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {supabase} from '../../../api/supabase';
import {Posts} from '../../../types/global.d';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../../api/post';
// import {loginState} from '../../../shared/recoil/authAtom';

const PostList = () => {
  // const [posts, setPosts] = useState<Posts>([]);
  const [editingPosts, setEditingPosts] = useState([]);

  const [content, setContent] = useState('');

  const [isEditing, setIsEditing] = useState<boolean>(false);
  // const [currentUser, setCurrentUser] = useState('');

  // const getCurrentUser = async () => {
  //   const { data: user } = await supabase.auth.getUser();
  //   console.log('current user', user);
  //   return user;
  // }

  // post 목록 불러오기
  const {data: posts} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  console.log(posts);

  
  // post 추가
  

  const handleContentInputchange = e => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const addPosts = async () => {
    const data = {
      userid: 'test', // login 값을 가져와서 넣어야함
      photo_url: posts.photo_url, // 사진 업로드 기능만들어서 input 값 넣어주기
      content: content,
    };
    await supabase.from('posts').insert(data);
  };

  // post 삭제
  const deletePost = async (id: number) => {
    const {data: postData, error} = await supabase.from('posts').delete().eq('id', id);
    getPosts();
    if (postData) {
      console.log('data', postData);
    } else {
      console.log('error', error);
    }
  };

  // post 수정
  const onEditingText = (e) => {
    e.preventDefault();
    setEditingPosts(e.target.value);
  };

  const editingPost = async (id: number) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return {...post, content: editingPosts};
      }
    });
    setEditingPosts(updatedPosts);
    await supabase.from('posts').update({content: editingPosts}).eq('id', id);
    setIsEditing(false)
  };

  // post 수정 취소
  const editingCancelPost = (id : number) => {
    const updatePosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, content: content};
      }
    })
    setEditingPosts(updatePosts);
    setIsEditing(false)
  }
  const isEditingHandler = async (id : number, bool: boolean) => {
    await supabase.from('posts').update({isEditing: bool}).eq('id', id);
  }


  return (
    <>
      <StForm onSubmit={addPosts}>
        <input
          type="text"
          placeholder="당신의 이야기를 공유해주세요"
          value={content}
          name="content"
          onChange={handleContentInputchange}
        />
        <button>추가하기</button>
      </StForm>
      <div>
        {posts.map((post) => {
          return (
            <>
              <Stul key={post}>
                <li>{post.userid}</li>
                <li>{post.content}</li>
                <li>{post.timestemp}</li>
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    isEditingHandler(post.id, true);
                  }}
                >
                  수정
                </button>

                {post.isEditing ? (
                  <form
                    onSubmit={() => {
                      editingPost(post.id);
                    }}
                  >
                    <input
                      type="text"
                      placeholder="내용수정"
                      value={editingPosts}
                      name="editingPosts"
                      onChange={onEditingText}
                    />
                    <button
                      onClick={() => {
                        editingCancelPost(post.id);
                      }}
                    >
                      취소
                    </button>
                    <button>저장</button>
                  </form>
                ) : null}
              </Stul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PostList;

const StForm = styled.form`
  margin-top: 100px;
`;
const Stul = styled.ul`
  margin-top: 100px;
`;
