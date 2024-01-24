import React, {useState} from 'react';
import St from './style';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {updatePost} from '../../../../api/post';
import {useParams} from 'react-router-dom';

const EditPostModal = ({handleModal, modalData}) => {
  const param = useParams();
  const queryClient = useQueryClient();
  const editMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']});
    },
  });

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

  return (
    <>
      <St.EditPostModalContainer onClick={handleModal}>
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
            <St.EditPosModalArtistName>{param.artistName}</St.EditPosModalArtistName>
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
  );
};

export default EditPostModal;
