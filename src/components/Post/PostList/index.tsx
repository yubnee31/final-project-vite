import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { addPost, getPosts, updatePost, deletePost, updateisEditing } from '../../../api/post'
import { getCurrentUser } from '../../../api/currentUser'

// 1. Community 레이아웃 - 경욱

// 1. 유저 정보 연동 => 내 게시글에만 수정, 삭제 뜨기 V
// 2. photo 업로드 기능 추가 
// 3. useState Edit 오류 수정 위한 Modal 구현
// ---------------------------------------
// 4. 댓글(수정, 삭제) 좋아요
// 5. 커뮤니티별 닉네임 추가, 변경 (선택사항)

// 2024.01.16. 오후 7시 : "경욱 - 레이아웃, 민정 - CRUD" Merge

const PostList = () => {
  const queryClient = useQueryClient();
  const [content, setContent] = useState('');
  
  // current UserInfo
  const {data: currentUser} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser
  })
  console.log('post CurrentUser', currentUser);


  // post list
  const {data: posts} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  const filteredPosts = posts?.filter(post => post.userid === currentUser!.user_metadata.name)

  console.log('filteredPosts', filteredPosts)
  
  // mutation  
  const addMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']})
    }
  })

  const editMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts']})
    }
  })

  const isEditingMutation = useMutation({
    mutationFn: updateisEditing,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts']})
    }
  })

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts']})
    }
  })
  

  // handler
  const handleChangeAddPost: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  }
  
  const handleSubmitAddPost: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newPost = {
      userid: currentUser!.user_metadata.name,
      photo_url: 'posts?.photo_url',
      content: content,
    };
    addMutation.mutate(newPost);
    setContent('');
  };

  const [editInputState, setEditInputState] = useState('') // TODO : Modal로 리팩토링
  const handleChangeEditPost: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setEditInputState(e.target.value);
  }

  const handleSubmitEditedPost: React.FormEventHandler<HTMLFormElement> = (id) => {
    const params = { id: id, content: editInputState };
    editMutation.mutate(params);
  }

  
  return (
    <>
    <StForm onSubmit={handleSubmitAddPost}>
      <input
        type="text"
        placeholder="당신의 이야기를 공유해주세요"
        value={content}
        name="content"
        onChange={handleChangeAddPost}
      />
      <button>추가하기</button>
    </StForm>
      {posts?.sort((a, b) => {
        const aDate: any = new Date(a.created_at);
        const bDate: any = new Date(b.created_at);
        return bDate - aDate;
      }).map((post) => {
        return (
          <>
            <Stul key={post.id}>
              <li>{post.userid}</li>
              <li>{post.content}</li>
              <li>{post.created_at}</li>
              {post.userid === currentUser!.user_metadata.name &&
              <>
                <button
              onClick={() => {
                deleteMutation.mutate(post.id);
              }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  isEditingMutation.mutate(post.id);
                }}
              >
                수정
              </button>
              </>}
              {post.isEditing ? (
                  <form
                    onSubmit={() => {
                      handleSubmitEditedPost(post.id);
                    }}
                  >
                    <input
                      type="text"
                      placeholder="내용수정"
                      value={editInputState}
                      name="editingPosts"
                      onChange={handleChangeEditPost}
                    />
                    <button
                      // onClick={() => {
                      //   editingCancelPost(post.id);
                      // }}
                    >
                      취소
                    </button>
                    <button>저장</button>
                  </form>
                ) : null}
            </Stul>

          </>
        )
      })}
    </>




  )
}

const StForm = styled.form`
  margin-top: 100px;
`;

const Stul = styled.div`
  
`
export default PostList