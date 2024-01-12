import React, { useState } from 'react'
import styled from 'styled-components';

const AddPost = () => {
    const [content, setContent] = useState({
        userid: '',
        content: '',
        timestamp: '',
    });

    const PostContentChangeHandler = (e) => {
        e.preventDefault();
        setContent(e.target.value)
    }
  return (
    <>
        <StForm>
            <input 
                type='text'
                placeholder='당신의 이야기를 공유해주세요'
                value={content}
                name='content'
                onChange={PostContentChangeHandler}
            />
        </StForm>
    </>
  )
}

export default AddPost

const StForm = styled.form`
    margin-top: 100px;
`