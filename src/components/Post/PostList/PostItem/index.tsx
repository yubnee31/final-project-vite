import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import React, {useState} from 'react';
import St from './style';
import {getCurrentUser, getTargetUserInfo} from '../../../../api/currentUser';
import {deletePost} from '../../../../api/post';
import PostLike from '../PostLike';
import dayjs from 'dayjs';
import commentImg from '../../../../assets/images/chat.svg';
import seeMoreImg from '../../../../assets/images/meatballs-v.svg';
import PortalModal from '../../../Common/portalModal';
import OpenPostModal from '../OpenModal';
import EditPostModal from '../EditModal';

const PostItem = ({id, userid, content, created_at}) => {
  // modal
  const [openEditModal, setOpenEditModal] = useState(false);
  const [modalEditData, setModalEditData] = useState('');

  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [modalCommentData, setModalCommentData] = useState('');

  const handlecommentModal = (id, userid, content) => {
    setModalCommentData({id, userid, content});
    setOpenCommentModal(!openCommentModal);
  };

  const handleEditModal = (id, content) => {
    setModalEditData({id, content});
    setOpenEditModal(!openEditModal);
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

  const nameFilterHandler = id => {
    const target = userInfo?.find(e => e.id === id);
    return target?.username;
  };

  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postList']});
    },
  });
  return (
    <>
      <St.PostLi key={id}>
        <St.PostNameP>{nameFilterHandler(userid)}</St.PostNameP>
        <St.PostContentsP>{content}</St.PostContentsP>
        {/* <St.PostUploadImg src={postPhotoImg} alt='upload photo'/> */}
        <St.PostTimeP $right={'14%'}>{dayjs(created_at).format('HH:mm')}</St.PostTimeP>
        <St.PostTimeP $right={'1%'}>{dayjs(created_at).format('YYYY.MM.DD')}</St.PostTimeP>
        <PostLike postId={id} currentUser={currentUser} />
        <div>
          <St.CommentImg
            src={commentImg}
            $left={'6.5%'}
            onClick={() => {
              handlecommentModal(id, userid);
            }}
          />
        </div>
        <St.PostImg src={seeMoreImg} $left={'95%'} onClick={handleToggle} />
        {openToggle && (
          <>
            {userid === currentUser?.id ? (
              <St.PostBtnDiv>
                <St.PostBtn
                  onClick={() => {
                    deleteMutation.mutate(id);
                    setOpenToggle(false);
                  }}
                >
                  삭제
                </St.PostBtn>
                <St.PostBtn
                  onClick={() => {
                    handleEditModal(id, content);
                    setOpenToggle(false);
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
      <PortalModal>
        {openCommentModal && (
          <OpenPostModal handleModal={handlecommentModal} currentUser={currentUser} modalData={modalCommentData} />
        )}
      </PortalModal>
      <PortalModal>
        {openEditModal && (
          <EditPostModal handleModal={handleEditModal} modalData={modalEditData} setOpenEditModal={setOpenEditModal} />
        )}
      </PortalModal>
    </>
  );
};

export default PostItem;
