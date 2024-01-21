import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import {getPosts, updatePost, deletePost, updateisEditing} from '../../../api/post';
import {getCurrentUser} from '../../../api/currentUser';
import St from './style';
import heartUmg from '../../../assets/images/heart-white.png'
import commentImg from '../../../assets/images/comment-white.png'
import seeMoreImg from '../../../assets/images/see-more-white.png'
import styled from 'styled-components'

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

  // current UserInfo
  const {data: currentUser} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });
  console.log('post CurrentUser', currentUser);

  // post list
  const {data: posts} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  // mutation
  const editMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });

  const isEditingMutation = useMutation({
    mutationFn: updateisEditing,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });

  // handler
  const [editInputState, setEditInputState] = useState(''); // TODO : Modal로 리팩토링
  const handleChangeEditPost: React.ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    setEditInputState(e.target.value);
  };

  const handleSubmitEditedPost: React.FormEventHandler<HTMLFormElement> = id => {
    const params = {id: id, content: editInputState};
    editMutation.mutate(params);
  };

  const createdAtHandler = (data: string, type: string) => {
    if (type === 'date') {
      const createdAt = new Date(data)
      const year = createdAt.getFullYear();
      const month = ('0' + (createdAt.getMonth() + 1)).slice(-2);
      const day = ('0' + createdAt.getDate()).slice(-2);
      const date = `${year}.${month}.${day}.`
      console.log(date)
      return date;
    } else if (type === 'time') {
      const createdAt = new Date(data)
      const hours = ('0' + createdAt.getHours()).slice(-2); 
      const minutes = ('0' + createdAt.getMinutes()).slice(-2);
      const seconds = ('0' + createdAt.getSeconds()).slice(-2); 
      const time = `${hours}:${minutes}:${seconds}`
      console.log(time)
      return time;
    } else {
      return data;
    }
  }

  return (
    <>
        <St.PostDiv>
          <St.PostUl>
            {posts
              ?.sort((a, b) => {
                const aDate: any = new Date(a.created_at);
                const bDate: any = new Date(b.created_at);
                return bDate - aDate;
              })
              .map(post => {
                return (
                  <St.PostLi>
                      <St.PostNameP>{post.userid}</St.PostNameP>
                      <St.PostContentsP>{post.content}</St.PostContentsP>
                      <St.PostTimeP $right={'14%'}>{createdAtHandler(post.created_at, 'time')}</St.PostTimeP>
                      <St.PostTimeP $right={'1%'}>{createdAtHandler(post.created_at, 'date')}</St.PostTimeP>
                      <St.PostImg src={heartUmg} $left={'1%'} />
                      <St.PostImg src={commentImg} $left={'6.5%'} />
                      {/* <St.PostImg src={seeMoreImg} $left={'95%'} /> */}
                      {post.userid === currentUser!.user_metadata.name ? (
                        <>
                          <StPostBtn
                          $right={'10%'}
                            onClick={() => {
                              deleteMutation.mutate(post.id);
                            }}
                          >
                            삭제
                          </StPostBtn>
                          <StPostBtn
                          $right={'1%'}
                            onClick={() => {
                              isEditingMutation.mutate(post.id);
                            }}
                          >
                            수정
                          </StPostBtn>
                        </>
                      )
                      : (
                        <>
                        <StPostBtn
                        $right={'10%'}
                        >
                          신고
                        </StPostBtn>
                        <StPostBtn
                        $right={'1%'}
                        >
                          차단
                        </StPostBtn>
                      </>
                      )
                    }
                      {post.isEditing ? (
                        <StPostEditForm
                          onSubmit={() => {
                            handleSubmitEditedPost(post.id);
                          }}
                        >
                          <StPostEditInput
                            type="text"
                            placeholder="내용수정"
                            value={editInputState}
                            name="editingPosts"
                            onChange={handleChangeEditPost}
                          />
                          <StPostEditBtn
                          // onClick={() => {
                          //   editingCancelPost(post.id);
                          // }}
                          >
                            취소
                          </StPostEditBtn>
                          <StPostEditBtn>저장</StPostEditBtn>
                        </StPostEditForm>
                      ) : null}
                  </St.PostLi>
                );
              })}
          </St.PostUl>
        </St.PostDiv>
    </>
  );
};

const StPostBtn = styled.button`
  position: absolute;
  right: ${(props) => props.$right};
  bottom: 5%;

  border: none;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  width: 60px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #333333;
    transition: 0.5s;
  }


`

const StPostEditForm = styled.form`
  position: absolute;
  left: 1%;
  top: 25%;

  width: 750px;
  height: 50px;
`

const StPostEditInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;

`
const StPostEditBtn = styled.button`
  border: none;
  background-color: transparent;
  border: 1px solid gray;
  width: 50px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #333333;
    transition: 0.5s;
  }
`

export default PostList