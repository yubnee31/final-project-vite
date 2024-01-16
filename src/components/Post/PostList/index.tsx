import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import {getPosts, updatePost, deletePost, updateisEditing} from '../../../api/post';
import {getCurrentUser} from '../../../api/currentUser';
import St from './style';
import heartUmg from '../../../assets/images/heart-white.png'
import commentImg from '../../../assets/images/comment-white.png'
import seeMoreImg from '../../../assets/images/see-more-white.png'

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
                      <St.PostTimeP $right={'14%'}>{post.created_at}</St.PostTimeP>
                      <St.PostTimeP $right={'1%'}>{post.created_at}</St.PostTimeP>
                      <St.PostImg src={heartUmg} $left={'1%'} />
                      <St.PostImg src={commentImg} $left={'6.5%'} />
                      <St.PostImg src={seeMoreImg} $left={'95%'} />
                      {post.userid === currentUser!.user_metadata.name && (
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
                        </>
                      )}
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
                  </St.PostLi>
                );
              })}
          </St.PostUl>
        </St.PostDiv>
    </>
  );
};

export default PostList