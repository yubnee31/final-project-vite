import React, {useState} from 'react';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import St from './style';
import {getTargetUserInfo} from '../../../../api/currentUser';
import {addPostLikes, getPostLikes, updatePostLikes} from '../../../../api/like';
import {addComment, deleteComment, getComments} from '../../../../api/postComment';
import OnlyTextOpenPost from './OnlyTextOpen';
import OpenImage from './ImagePostOpen/OpenImage';
import OpenText from './ImagePostOpen/OpenText';

const OpenPostModal = ({handleModal, currentUser, modalData}: any) => {
  const queryClient = useQueryClient();

  const [comment, setComment] = useState('');

  const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getTargetUserInfo,
  });

  const nameFilterHandler = id => {
    const target = userInfo?.find(e => e.id === id);
    return target?.username;
  };

  // like
  const {data: postLike} = useQuery({
    queryKey: ['postLike'],
    queryFn: getPostLikes,
  });

  const addLikeMutation = useMutation({
    mutationFn: addPostLikes,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postLike']});
    },
  });

  const likeMutation = useMutation({
    mutationFn: updatePostLikes,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postLike']});
    },
  });

  const targetPost = postLike?.find(e => e.postid === modalData.id);
  const target = targetPost?.userid?.filter(e => e.id === currentUser.id);

  const onClickLikeHandler = () => {
    if (targetPost === undefined) {
      const param = {postid: modalData.id, userid: [{id: currentUser.id}]};
      addLikeMutation.mutate(param);
    } else if (target?.length) {
      const likeCounter = targetPost.like - 1;
      const postInfoData = targetPost.userid.filter(e => e.id !== currentUser.id);
      const param = {postid: modalData.id, userid: postInfoData, likeCount: likeCounter};
      likeMutation.mutate(param);
    } else {
      const likeCounter = targetPost.like + 1;
      targetPost.userid.push({id: currentUser.id});
      const param = {postid: modalData.id, userid: targetPost.userid, likeCount: likeCounter};
      likeMutation.mutate(param);
    }
  };

  // comments list
  const {data: comments} = useQuery({
    queryKey: ['postComments'],
    queryFn: getComments,
  });

  // add comment
  const addMutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postComments']});
    },
  });

  const handleChangeAddComment: React.ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleSubmitAddComment: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const newComment = {
      postid: modalData.id,
      userid: currentUser?.id,
      comment: comment,
    };

    addMutation.mutate(newComment);
    setComment('');
  };

  // delete comment
  const deleteMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postComments']});
    },
  });

  return (
    <>
      <St.OpenPostModalContainer onClick={handleModal}>
        <St.OpenPostModalBox
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {/* {modalData.photo_url?.length ? (
            <St.OpenPostModalContent>
              <OpenImage currentUser={currentUser} modalData={modalData} />
              <OpenText
                currentUser={currentUser}
                nameFilterHandler={nameFilterHandler}
                modalData={modalData}
                target={target}
                targetPost={targetPost}
                onClickLikeHandler={onClickLikeHandler}
                comments={comments}
                deleteMutation={deleteMutation}
                comment={comment}
                handleChangeAddComment={handleChangeAddComment}
                handleSubmitAddComment={handleSubmitAddComment}
                handleModal={handleModal}
              />
            </St.OpenPostModalContent>
          ) : ( */}
          <OnlyTextOpenPost
            currentUser={currentUser}
            nameFilterHandler={nameFilterHandler}
            modalData={modalData}
            target={target}
            targetPost={targetPost}
            onClickLikeHandler={onClickLikeHandler}
            comments={comments}
            deleteMutation={deleteMutation}
            comment={comment}
            handleChangeAddComment={handleChangeAddComment}
            handleSubmitAddComment={handleSubmitAddComment}
            handleModal={handleModal}
          />
          {/* )} */}
        </St.OpenPostModalBox>
      </St.OpenPostModalContainer>
    </>
  );
};

export default OpenPostModal;
