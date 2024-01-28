import {useQuery, useInfiniteQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {getCurrentUser, getTargetUserInfo} from '../../../api/currentUser';
import St from './style';
import PortalModal from '../../Common/portalModal';
import {useParams} from 'react-router-dom';
import EditPostModal from './EditModal';
import Spinner from '../../Common/Spinner';
import OpenPostModal from './OpenModal';
import {morePosts} from '../../../api/scrollerapi';
import {toast} from 'react-toastify';
import PostItem from './PostItem';

const PostList = () => {
  const param = useParams();

  // 스크롤 기능
  const handleScroll = () => {
    const {scrollY} = window; // 현재 스크롤 높이
    const {clientHeight} = document.documentElement; // 현재 화면 높이
    const {scrollHeight} = document.documentElement; // 전체 높이
    // hasNextPage 이거 왜 계속 ture 나옴?
    if (Math.ceil(scrollY) + clientHeight === scrollHeight && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
      // if (isBottom) {
      //   toast.error('마지막 페이지입니다.');
      // }
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
  if (!hasNextPage) {
    window.removeEventListener('scroll', handleScroll);
  }

  if (isFetchingNextPage) {
    return <Spinner />;
  }

  return (
    <St.PostDiv>
      <St.PostUl>
        {currentArtistPost?.map(post => {
          return (
            <>
              <PostItem id={post.id} userid={post.userid} content={post.content} created_at={post.created_at} />
            </>
          );
        })}
      </St.PostUl>
    </St.PostDiv>
  );
};

export default PostList;
