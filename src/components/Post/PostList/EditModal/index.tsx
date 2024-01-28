import React, {useState} from 'react';
import St from './style';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {updatePost} from '../../../../api/post';
import {useParams} from 'react-router-dom';

const EditPostModal = ({handleModal, modalData, setOpenEditModal}) => {
  const param = useParams();
  const queryClient = useQueryClient();
  const editMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['postList']});
    },
  });

  const [editInputState, setEditInputState] = useState(modalData.content); // TODO : Modal로 리팩토링

  const handleChangeEditPost: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditInputState(e.target.value);
  };

  const handleSubmitEditedPost: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {id: modalData.id, content: editInputState};
    editMutation.mutate(params);
    setOpenEditModal(false);
  };

  const handleClickEditCancelPost = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditInputState(modalData.content);
    setOpenEditModal(false);
  };

  return (
    <>
      <St.EditPostModalContainer onClick={handleModal}>
        <St.EditPostModalBox
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <St.EditPostModalContent
            onSubmit={e => {
              handleSubmitEditedPost(e);
            }}
          >
            <St.EditPostModalTitle>post 수정하기</St.EditPostModalTitle>
            <St.EditPosModalArtistName>{param.artistName}</St.EditPosModalArtistName>
            <St.EditPostModalInput
              type="text"
              value={editInputState}
              name="editingPosts"
              placeholder="수정할 내용을 입력해주세요"
              onChange={handleChangeEditPost}
            />
            <St.EditPostModalBtnDiv>
              <St.EditPostModalBtn onClick={e => handleClickEditCancelPost(e)}>취소</St.EditPostModalBtn>
              <St.EditPostModalBtn type="submit">저장</St.EditPostModalBtn>
            </St.EditPostModalBtnDiv>
          </St.EditPostModalContent>
        </St.EditPostModalBox>
      </St.EditPostModalContainer>
    </>
  );
};

export default EditPostModal;
