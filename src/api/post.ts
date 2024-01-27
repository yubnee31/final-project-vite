import {supabase} from './supabase';

type POST = {
  id?: string;
  userid?: string;
  username?: string;
  content?: string;
  photo_url?: string;
  isEditing?: boolean;
  created_at?: string;
  artist?: string;
};

type newPost = Omit<POST, 'id' | 'createdAt'>;

//등록된 게시글 목록 가져오기
const getPosts = async () => {
  const {data} = await supabase.from('posts').select('*');
  return data;
};

// 새 게시글 등록
const addPost = async (newPost: newPost) => {
  const {error} = await supabase.from('posts').insert(newPost);
};

// 게시글 수정
const updatePost = async ({id, content}: POST) => {
  const {error} = await supabase.from('posts').update({content: content, isEditing: false}).eq('id', id);
};

const updateisEditing = async (id: string) => {
  const {error} = await supabase.from('posts').update({isEditing: true}).eq('id', id);
};

// 게시글 삭제
const deletePost = async (id: string) => {
  const {error} = await supabase.from('posts').delete().eq('id', id);
};

// storage에 이미지 업로드
const uploadStorage = async ({uniqueKey, uploadFile}) => {
  const {data, error} = await supabase.storage.from('upload_posts').upload(uniqueKey, uploadFile, {
    cacheControl: '3600',
    upsert: false,
  });
};

// storage에서 파일 다운로드
const downloadStorage = async uniqueKey => {
  const {data, error} = await supabase.storage.from('upload_posts').download(uniqueKey);
};

// posts table에 파일 업로드
const uploadPostsTable = async uniqueKey => {
  const {error} = await supabase.from('posts').update(uniqueKey).eq('id', id);
};

export {getPosts, addPost, updatePost, deletePost, updateisEditing, uploadStorage, downloadStorage, uploadPostsTable};
