import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import {getPosts, updatePost, deletePost, updateisEditing} from '../../../api/post';
import {getCurrentUser} from '../../../api/currentUser';
import St from './style';
import heartUmg from '../../../assets/images/heart-white.png';
import commentImg from '../../../assets/images/comment-white.png';
import seeMoreImg from '../../../assets/images/see-more-white.png';
import PortalModal from '../../Common/portalModal';
import {Post} from '../../../types/global.d';

// 1. Community 레이아웃 - 경욱

// 1. 유저 정보 연동 => 내 게시글에만 수정, 삭제 뜨기 V
// 2. useState Edit 오류 수정 위한 portal Modal 구현 V
// 3. photo 업로드 기능 추가
// ---------------------------------------
// 4. 댓글(수정, 삭제), 좋아요

// 2024.01.16. 오후 7시 : "경욱 - 레이아웃, 민정 - CRUD" Merge

const PostList = () => {
  // modal
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const handleModal = (id: React.SetStateAction<string>) => {
    setModalData(id);
    setOpenModal(!openModal);
  };

  // toggle
  const [openToggle, setOpenToggle] = useState(false);
  const handleToggle = () => {
    setOpenToggle(!openToggle);
  };

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
  const [editablePosts, setEditablePosts] = useState<Post[]>([]);
  const [editInputState, setEditInputState] = useState(''); // TODO : Modal로 리팩토링
  const handleChangeEditPost: React.ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    setEditInputState(e.target.value);
  };

  const handleSubmitEditedPost: React.FormEventHandler<HTMLFormElement> = id => {
    const params = {id: id, content: editInputState};
    editMutation.mutate(params);
  };

  const handleClickEditCancelPost: React.FormEventHandler<HTMLFormElement> = () => {};

  // upload photo
  // const [postPhotoImg, setPostPhotoImg] = useState(posts?.photo_url);

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
                <St.PostLi key={post.id}>
                  <St.PostNameP>{post.userid}</St.PostNameP>
                  <St.PostContentsP>{post.content}</St.PostContentsP>
                  {/* <St.PostUploadImg src={postPhotoImg} alt='upload photo'/> */}
                  <St.PostTimeP $right={'14%'}>{post.created_at}</St.PostTimeP>
                  <St.PostTimeP $right={'1%'}>{post.created_at}</St.PostTimeP>
                  <St.PostImg src={heartUmg} $left={'1%'} />
                  <St.PostImg src={commentImg} $left={'6.5%'} />
                  {/* <St.PostImg src={seeMoreImg} $left={'95%'} onClick={handleToggle} /> */}
                  {/* {openToggle && ( */}
                    <>
                      {post.userid === currentUser?.user_metadata.name ? (
                        <St.PostBtnDiv>
                          <St.PostBtn
                            onClick={() => {
                              deleteMutation.mutate(post.id);
                            }}
                          >
                            삭제
                          </St.PostBtn>
                          <St.PostBtn
                            onClick={() => {
                              handleModal(post.id);
                            }}
                          >
                            수정
                          </St.PostBtn>
                        </St.PostBtnDiv>
                      ) : (
                        <St.PostBtnDiv>
                          <St.PostBtn>차단</St.PostBtn>
                          <St.PostBtn>신고</St.PostBtn>
                        </St.PostBtnDiv>
                      )}
                    </>
                  {/* )} */}
                </St.PostLi>
              );
            })}
          <PortalModal>
            {openModal && (
              <>
                <St.EditPostModalContainer
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                >
                  <St.EditPostModalBox
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  >
                    <St.EditPostModalContent
                      onSubmit={() => {
                        handleSubmitEditedPost(modalData);
                      }}
                    >
                      <St.EditPostModalTitle>post 수정하기</St.EditPostModalTitle>
                      <St.EditPosModalArtistName>artist name</St.EditPosModalArtistName>
                      <St.EditPostModalInput
                        type="text"
                        placeholder="내용수정"
                        value={editInputState}
                        name="editingPosts"
                        onChange={handleChangeEditPost}
                      />
                      <St.EditPostModalBtnDiv>
                        <St.EditPostModalBtn
                          onClick={() => {
                            handleClickEditCancelPost;
                          }}
                        >
                          취소
                        </St.EditPostModalBtn>
                        <St.EditPostModalBtn>저장</St.EditPostModalBtn>
                      </St.EditPostModalBtnDiv>
                    </St.EditPostModalContent>
                  </St.EditPostModalBox>
                </St.EditPostModalContainer>
              </>
            )}
          </PortalModal>
        </St.PostUl>
      </St.PostDiv>
    </>
  );
};

export default PostList;
