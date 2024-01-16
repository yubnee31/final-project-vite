import React, { useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addPost } from '../../../api/post'
import profileImg from '../../../assets/images/profile-white.png'
import St from './style'

const AddPost = () => {
  const queryClient = useQueryClient();
  const [content, setContent] = useState('');
  
  const addMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']})
    }
  })

  const handleChangeAddPost: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  }
  
  const handleSubmitAddPost: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newPost = {
      userid: 'test',
      photo_url: 'posts?.photo_url',
      content: content,
    };
    addMutation.mutate(newPost);
    setContent('');
  };
  return (
    <>
      <St.InputDiv onSubmit={handleSubmitAddPost}>
        <St.InputImg src={profileImg}/>
        <St.Input
          type="text"
          placeholder="당신의 이야기를 공유해주세요"
          value={content}
          name="content"
          onChange={handleChangeAddPost}
        />
        <button>추가하기</button>
      </St.InputDiv>
    </>

  )
}

export default AddPost