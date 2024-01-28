import {useQuery, useQueryClient, useMutation, useInfiniteQuery} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {getPosts, deletePost, updateisEditing} from '../../../api/post';
import {getCurrentUser, getTargetUserInfo} from '../../../api/currentUser';
import St from './style';
import commentImg from '../../../assets/images/chat.svg';
import seeMoreImg from '../../../assets/images/meatballs-v.svg';
import PortalModal from '../../Common/portalModal';
import {useParams} from 'react-router-dom';
import EditPostModal from './EditModal';
import Spinner from '../../Common/Spinner';
import PostLike from './PostLike';
import dayjs from 'dayjs';
import OpenPostModal from './OpenModal';
import {morePosts} from '../../../api/scrollerapi';

const PostList = () => {
  // modal
  const [openEditModal, setOpenEditModal] = useState(false);
  const [modalEditData, setModalEditData] = useState('');

  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [modalCommentData, setModalCommentData] = useState('');

  const handleEditModal = (id: React.SetStateAction<string>) => {
    setModalEditData(id);
    setOpenEditModal(!openEditModal);
  };

  // 스크롤 기능
  const handleScroll = () => {
    const {scrollY} = window; // 현재 스크롤 높이
    const {clientHeight} = document.documentElement; // 현재 화면 높이
    const {scrollHeight} = document.documentElement; // 전체 높이
    // hasNextPage 이거 왜 계속 ture 나옴?
    if (Math.ceil(scrollY) + clientHeight === scrollHeight && hasNextPage && !isFetchingNextPage) {
      console.log('hasNextPage', hasNextPage);
      console.log('isFetchingNextPage', isFetchingNextPage);

      console.log('next page');
      fetchNextPage();
    }
  };
  window.addEventListener('scroll', handleScroll);

  const handlecommentModal = (id: React.SetStateAction<string>) => {
    setModalCommentData(id);
    setOpenCommentModal(!openCommentModal);
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
  const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getTargetUserInfo,
  });

  // post list
  const {
    data: morePostList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['postList'],
    queryFn: ({pageParam = 0}) => morePosts(pageParam, param.artistName),
    initialPageParam: {start: 0, end: 5},
    getNextPageParam: lastPage =>
      lastPage.nextCursor ? {start: lastPage.nextCursor, end: lastPage.nextCursor + 4} : null,
  });
  const currentArtistPost = morePostList?.pages.map(e => e.data).flat();
  console.log('morePostList', morePostList);
  if (!hasNextPage) {
    window.removeEventListener('scroll', handleScroll);
  }

  // mutation
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postList']});
    },
  });

  if (isFetchingNextPage) {
    return <Spinner />;
  }

  const nameFilterHandler = id => {
    const target = userInfo?.find(e => e.id === id);
    return target?.username;
  };

  return (
    <>
      <St.PostDiv>
        <St.PostUl>
          {currentArtistPost?.map(post => {
            return (
              <St.PostLi key={post.id}>
                <St.PostNameP>{nameFilterHandler(post.userid)}</St.PostNameP>
                <St.PostContentsP>{post.content}</St.PostContentsP>
                {/* <St.PostUploadImg src={postPhotoImg} alt='upload photo'/> */}
                <St.PostTimeP $right={'14%'}>{dayjs(post.created_at).format('HH:mm')}</St.PostTimeP>
                <St.PostTimeP $right={'1%'}>{dayjs(post.created_at).format('YYYY.MM.DD')}</St.PostTimeP>
                <PostLike
                  postId={post.id}
                  currentUser={currentUser}
                  postlike={post.like}
                  postInfo={post.like_userInfo}
                />
                <div>
                  <St.CommentImg
                    src={commentImg}
                    $left={'6.5%'}
                    onClick={() => {
                      handlecommentModal(post.id);
                    }}
                  />
                </div>
                <St.PostImg src={seeMoreImg} $left={'95%'} onClick={handleToggle} />
                {openToggle && (
                  <>
                    {post.userid === currentUser?.id ? (
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
                            handleEditModal(post.id);
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
          <PortalModal>
            {openCommentModal && (
              <OpenPostModal handleModal={handlecommentModal} currentUser={currentUser} modalData={modalCommentData} />
            )}
          </PortalModal>
          <PortalModal>
            {openEditModal && <EditPostModal handleModal={handleEditModal} modalData={modalEditData} />}
          </PortalModal>
        </St.PostUl>
      </St.PostDiv>
    </>
  );
};

export default PostList;
