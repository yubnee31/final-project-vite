import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import React, {useState, useEffect} from 'react';
import St from './style';
import {getCurrentUser, getTargetUserInfo} from '../../../../api/currentUser';
import {deletePost} from '../../../../api/post';
import PostLike from '../PostLike';
import dayjs from 'dayjs';
import commentImg from '../../../../assets/images/chat.svg';
import seeMoreImg from '../../../../assets/images/meatballs-v.svg';
import profileImg from '../../../../assets/images/profile-white.png';
import PortalModal from '../../../Common/portalModal';
import OpenPostModal from '../OpenModal';
import EditPostModal from '../EditModal';
import {supabase} from '../../../../api/supabase';

const PostItem = ({id, userid, content, photo_url, created_at}) => {
  const queryClient = useQueryClient();

  // modal
  const [openEditModal, setOpenEditModal] = useState(false);
  const [modalEditData, setModalEditData] = useState('');

  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [modalCommentData, setModalCommentData] = useState('');

  const handlecommentModal = (id, userid, content, photo_url, created_at) => {
    setModalCommentData({id, userid, content, photo_url, created_at});
    setOpenCommentModal(!openCommentModal);
  };

  const handleEditModal = (id, content, photo_url) => {
    setModalEditData({id, content, photo_url});
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

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postList']});
    },
  });

  // 유저 프로필 서버에서 불러오기
  const [profileImage, setProfileImage] = useState(profileImg);
  const targetUser = userInfo?.find(e => e.id === currentUser?.id);

  const fetchImageData = async () => {
    try {
      const {data, error} = await supabase.from('userinfo').select('profile_image').eq('id', currentUser?.id).single();

      if (data?.profile_image) {
        // 이미지 파일명이나 경로를 가져옴
        const imageFileName = data.profile_image;

        // Supabase 스토리지에서 직접 이미지를 가져오기
        const {data: imageData, error: imageError} = await supabase.storage
          .from('profile-images') // 스토리지 버킷 이름
          .download(imageFileName);

        // 다운로드된 이미지를 Blob URL로 변환
        const imageUrl = URL.createObjectURL(imageData);

        // 상태 업데이트
        setProfileImage(imageUrl);
      }
    } catch (error) {
      // console.error('프로필 이미지 가져오기 오류', error);
    }
  };

  useEffect(() => {
    if (!targetUser) {
      setProfileImage(profileImg);
    } else {
      fetchImageData();
      setProfileImage(profileImage);
    }
  }, []);

  return (
    <St.PostLiAndToggleDiv>
      <St.PostLi key={id}>
        <St.PostHeader>
          <St.PostUserInfoDiv>
            <St.PostUserImg src={profileImage} />
            <St.PostNameP>{nameFilterHandler(userid)}</St.PostNameP>
          </St.PostUserInfoDiv>
          <St.PostTimeDiv>
            <St.PostTimeP>{dayjs(created_at).format('HH:mm')}</St.PostTimeP>
            <St.PostTimeP>{dayjs(created_at).format('YYYY.MM.DD')}</St.PostTimeP>
          </St.PostTimeDiv>
        </St.PostHeader>
        <St.PostClickOpenModal
          onClick={() => {
            handlecommentModal(id, userid, content, photo_url, created_at);
          }}
        >
          <St.PostContentsP>{content}</St.PostContentsP>
          {photo_url &&
            photo_url.map((url, index) => {
              if (photo_url.length === 1) {
                return <St.PostContentOneImg src={url} key={index} />;
              } else if (photo_url.length === 2) {
                return <St.PostContentTwoImg src={url} key={index} />;
              } else if (photo_url.length === 4) {
                return <St.PostContentFourImg src={url} key={index} />;
              }
            })}
          {photo_url && photo_url.length === 3 && (
            <St.PostContentThreeImgDiv>
              <St.PostContentThreeImgA src={photo_url[0]} />
              <St.PostContentThreeImgB src={photo_url[1]} />
              <St.PostContentThreeImgC src={photo_url[2]} />
            </St.PostContentThreeImgDiv>
          )}
        </St.PostClickOpenModal>
        <St.PostLikeCommentMoreDiv>
          <St.PostLikeCommentDiv>
            <PostLike postId={id} currentUser={currentUser} />
            <St.CommentImg
              src={commentImg}
              onClick={() => {
                handlecommentModal(id, userid, content, photo_url, created_at);
              }}
            />
          </St.PostLikeCommentDiv>
          <St.PostMoreImg src={seeMoreImg} onClick={handleToggle} />
        </St.PostLikeCommentMoreDiv>
      </St.PostLi>
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
                삭제하기
              </St.PostBtn>
              <St.PostBtn
                onClick={() => {
                  handleEditModal(id, content, photo_url);
                  setOpenToggle(false);
                }}
              >
                수정하기
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
    </St.PostLiAndToggleDiv>
  );
};

export default PostItem;
