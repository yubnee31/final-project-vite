import React, { useState } from 'react'
import styled from 'styled-components';
import { supabase } from '../../../api/supabase';

const AddPost = () => {
    type POST = {
        id?: UUID;
        userid?: string;
        content?: string;
        photo?: string;
        isEditing?: boolean;
        editingText?: string;
        timeStamp?: number;
    };
    
    type NewPost = Omit<POST, 'id' | 'createdAt' | 'editingText'>;

    const [content, setContent] = useState('');

    const handleContentInputchange = (e) => {
        setContent(e.target.value)
    }

    // const handleAddPostBtnClick = 

    const handleAddPostBtnClick = async (newPost: NewPost) => {
        await supabase
        .from('posts')
        .insert(newPost);

        console.log('newPost', newPost)
    };

  return (
    <>
        <StForm onSubmit={handleAddPostBtnClick}>
            <input 
                type='text'
                placeholder='당신의 이야기를 공유해주세요'                
                value={content}
                name='content'
                onChange={handleContentInputchange}
            />
            <button type='submit'>추가하기</button>
        </StForm>
    </>
  )
}

export default AddPost

const StForm = styled.form`
    margin-top: 100px;
`