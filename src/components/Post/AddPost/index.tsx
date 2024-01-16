import React from 'react'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { addPost } from '../../../api/post'

const AddPost = () => {
  const queryClient = useQueryClient();
  
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
    <div>index</div>
  )
}

export default AddPost