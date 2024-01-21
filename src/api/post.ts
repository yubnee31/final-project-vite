import { useState } from "react";
import { supabase } from "./supabase";

type POST = {
    id?: number;
    userid?: string;
    content?: string;
    photo_url?: string;
    isEditing?: boolean;
    created_at?: string;
};

type newPost = Omit<POST, 'id' | 'createdAt'>;

//등록된 게시글 목록 가져오기
const getPosts = async () => {
  try {
    const { data, error } = await supabase.from('posts').select('*');
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
};

// 새 게시글 등록
const addPost = async (newPost: newPost) => {
  try {
    const { error } = await supabase.from('posts').insert(newPost);
  } catch (error) {
    console.log('Error', error);
  }
};

// 게시글 수정
const updatePost = async ({ id, content }: POST) => {
  try {
    const { error } = await supabase
      .from('posts')
      .update({ content: content, isEditing: false  })
      .eq('id', id);
  } catch (error) {
    console.log('Error', error);
  }
};

const updateisEditing = async (id : number) => {
  try {
    const { error } = await supabase
      .from('posts')
      .update({ isEditing: true  })
      .eq('id', id);
  } catch (error) {
    console.log('Error', error);
  }
};

// 게시글 삭제
const deletePost = async (id: number) => {
  try {
    await supabase.from('posts').delete().eq('id', id);
  } catch (error) {
    console.log('Error', error);
  }
};

// supabase storage에 이미지 올리기

// storage에 파일 업로드하기
// const [selecedtImg, setSelectedImg] = useState<File | null>(null)
// const bucketName = 'upload_posts';
// const uniqueKey = `upload_posts/${Date.now()}_${Math.floor(Math.random() * 1000)}.png`;
// const uploadStoragePostImg = async () => {
//   try{
//     const { data, error } = await supabase
//     .storage
//     .from(bucketName)
//     .upload(uniqueKey, selecedtImg, {contentType: 'image/png'})
//   } catch (error) {
//     console.log('uploadImgError', error)
//   }
// }

// const postImgFile = e.target.files[0]
// const uploadPostImg = async () => {
//   const { data, error } = await supabase
//   .storage
//   .from(bucketName)
//   .upload(uniqueKey, postImgFile, {
//     cacheControl: 'public',
//     upsert: false
//   })
// }

export {
  getPosts,
  addPost,
  updatePost,
  deletePost,
  updateisEditing,
  // uploadStoragePostImg,
  // uploadPostImg,
};
  