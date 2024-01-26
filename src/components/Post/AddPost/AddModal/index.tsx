import React, {useState} from 'react';
import St from './style';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {getCurrentUser, getTargetUserInfo} from '../../../../api/currentUser';
import {addPost, getPosts} from '../../../../api/post';
import postPhotoImg from '../../../assets/images/post-photo.png';
import {supabase} from '../../../../api/supabase';
import {useParams} from 'react-router-dom';

const AddPostModal = ({handleModal}) => {
  const queryClient = useQueryClient();
  const param = useParams();
  const [content, setContent] = useState('');

  const {data: currentUser} = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  });
  const {data: userInfo} = useQuery({
    queryKey: ['userInfo'],
    queryFn: getTargetUserInfo,
  });

  const targetUser = userInfo?.find(user => user.id === currentUser?.id);

  const {data: posts} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  const addMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });

  const handleChangeAddPost: React.ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleSubmitAddPost: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const newPost = {
      userid: currentUser?.id,
      username: targetUser.username,
      photo_url: posts?.photo_url,
      content: content,
      artist: param.artistName,
    };
    addMutation.mutate(newPost);
    setContent('');
  };
  // ----------------------------------------------------------------

  const supabaseUrl = 'https://dmfvylsldcremnnbzjuo.supabase.co';
  const bucketName = 'upload_posts';
  const [postPhotoImg, setPostPhotoImg] = useState(posts?.photo_url);
  const [selectedPhotoImg, setSelectedPhotoImg] = useState<File | null>(null);

  const getImgData = async id => {
    try {
      const {data, error} = await supabase.from('posts').select('photo_url').eq('id', id);

      if (error) {
        console.log('posts img 가져오기 실패', error);
      } else {
        if (data?.photo_url) {
          // 이미지 파일먕이나 경로 가져옴
          const imgFileName = data.photo_url;

          // supabase storage에서 직접 이미지 가져오기
          const {data: imgData, error: imgError} = await supabase.storage.from(bucketName).download(imgFileName);

          if (imgError) {
            console.log('post photo image 다운로드 실패', imgError);
          } else {
            // download image => 변환: Blob URL
            const imgUrl = URL.createObjectURL(imgData);

            // 상태 업데이트
            setPostPhotoImg(imgUrl);
          }
        }
      }
    } catch (error) {
      console.log('post photo image 가져오기 오류', error);
    }
  };

  const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedPhotoImg(file);

      const imgUrl = URL.createObjectURL(file);
      setPostPhotoImg(imgUrl);
    }
  };

  const updatePhoto = async () => {
    if (!selectedPhotoImg) return;

    // post photo img upload
    const uniqueKey = `upload_posts/${Date.now()}_${Math.floor(Math.random() * 1000)}.png`;
    const {data: uploadData, error: uploadError} = await supabase.storage
      .from(bucketName)
      .upload(uniqueKey, selectedPhotoImg, {contentType: 'image/png'});

    if (uploadError) {
      console.log('post photo upload fail', uploadError);
      return;
    }

    const {data: postPhotoData, error: postPhotoError} = await supabase
      .from('posts')
      .update({upload_posts: uniqueKey})
      .eq('id', id)
      .select();

    if (postPhotoError) {
      console.log('post photo update fail', postPhotoError);
    } else {
      console.log('post photo update success');
      const uploadUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${uniqueKey}`;

      setPostPhotoImg(uploadUrl);
      alert('사진 업로드 완료');
    }
  };

  return (
    <>
      <St.ModalContainer onClick={handleModal}>
        <St.ModalBox
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <St.ModalContent onSubmit={handleSubmitAddPost}>
            <St.ModalHeader>
              <St.ModalTitle>포스트 쓰기</St.ModalTitle>
              <St.ModalArtistName>{param.artistName}</St.ModalArtistName>
            </St.ModalHeader>
            <St.ModalContentInput
              type="text"
              placeholder="당신의 이야기를 공유해주세요"
              value={content}
              name="content"
              onChange={handleChangeAddPost}
            />
            <St.ModalBtnDiv>
              {/* <label type='file' accept='image/*' onChange={handleImgChange}/> */}
              <img src={postPhotoImg} />
              <St.ModalAddPostBtn onClick={updatePhoto}>등록</St.ModalAddPostBtn>
            </St.ModalBtnDiv>
          </St.ModalContent>
        </St.ModalBox>
      </St.ModalContainer>
    </>
  );
};

export default AddPostModal;
