import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import {getPosts, deletePost, updateisEditing} from '../../../api/post';
import {getCurrentUser} from '../../../api/currentUser';
import St from './style';
import commentImg from '../../../assets/images/comment-white.png';
import seeMoreImg from '../../../assets/images/see-more-white.png';
import PortalModal from '../../Common/portalModal';
import {useParams} from 'react-router-dom';
import EditPostModal from './EditModal';
import Spinner from '../../Common/Spinner';
import PostLike from './PostLike';

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

  const param = useParams();

  // current UserInfo
  const {data: currentUser} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });

  // post list
  const {data: posts, isLoading} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  // console.log('post List', posts);

  const currentArtistPost = posts?.filter(post => post.artist === param.artistName);
  // console.log('아티스트 별 게시글', currentArtistPost);

  // mutation
  const queryClient = useQueryClient();

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

  // upload photo
  // const [postPhotoImg, setPostPhotoImg] = useState(posts?.photo_url);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <St.PostDiv>
        <St.PostUl>
          {currentArtistPost
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
                  <PostLike
                    postId={post.id}
                    currentUser={currentUser}
                    postlike={post.like}
                    postInfo={post.like_userInfo}
                  />
                  <St.PostImg src={commentImg} $left={'6.5%'} />
                  <St.PostImg src={seeMoreImg} $left={'95%'} onClick={handleToggle} />
                  {openToggle && (
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
                  )}
                </St.PostLi>
              );
            })}
          <PortalModal>{openModal && <EditPostModal handleModal={handleModal} modalData={modalData} />}</PortalModal>
        </St.PostUl>
      </St.PostDiv>
    </>
  );
};

export default PostList;
