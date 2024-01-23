import {supabase} from './supabase';

type POST = {
  id?: string;
  userid?: string;
  content?: string;
  photo_url?: string;
  isEditing?: boolean;
  created_at?: string;
  artist?: string;
};

type newPost = Omit<POST, 'id' | 'createdAt'>;

//등록된 게시글 목록 가져오기
const getPosts = async () => {
  try {
    const {data, error} = await supabase.from('posts').select('*');
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
};

// 새 게시글 등록
const addPost = async (newPost: newPost) => {
  try {
    const {error} = await supabase.from('posts').insert(newPost);
  } catch (error) {
    console.log('Error', error);
  }
};

// 게시글 수정
const updatePost = async ({id, content}: POST) => {
  try {
    const {error} = await supabase.from('posts').update({content: content, isEditing: false}).eq('id', id);
  } catch (error) {
    console.log('Error', error);
  }
};

const updateisEditing = async (id: string) => {
  try {
    const {error} = await supabase.from('posts').update({isEditing: true}).eq('id', id);
  } catch (error) {
    console.log('Error', error);
  }
};

// 게시글 삭제
const deletePost = async (id: string) => {
  try {
    await supabase.from('posts').delete().eq('id', id);
  } catch (error) {
    console.log('Error', error);
  }
};

// 게시글 좋아요 전 좋아요 수 가져오기
const getInitialLikes = async (id: string) => {
  try {
    // id에 해당하는 게시글 데이터 가지고 옴
    const postList = await getPosts();

    if (postList) {
      const currentPost = postList.find(post => post.id === id);
      console.log(currentPost);

      if (currentPost) {
        console.log(currentPost);
        return currentPost.like;
      }
    }
  } catch (error) {
    console.log('좋아요 초기값 가져오기 실패', error);
    return 0;
  }
};

// 게시글 좋아요 추가
const addLikePost = async (id: string) => {
  try {
    // 로그인된 사용자 정보 확인
    const user = await supabase.auth.getUser();

    // 좋아요 증가 요청
    const initialLikes = await getInitialLikes(id);

    // 존재하는 데이터인지 확인
    const checkData = await supabase.from('posts').select('*').eq('id', id);

    if (checkData.data && checkData.data.length > 0) {
      const existingData = checkData.data[0];
      const userLikes = existingData.like_userInfo || [];

      // 이미 존재하는 경우, 해당 데이터 업데이트
      if (userLikes.some(likeUser => likeUser.id === user.id)) {
        // 좋아요 취소
        const updatedLikes = initialLikes - 1 < 0 ? 0 : initialLikes - 1;
        const updatedUserLikes = userLikes.filter(likedUser => likedUser.id !== user.id);

        const {data, error} = await supabase
          .from('posts')
          .update({like: updatedLikes, like_userInfo: updatedUserLikes})
          .eq('id', id);

        if (error) {
          console.log('좋이요 취소 실패', error);
        } else {
          console.log('좋아요 취소 완료');
        }
      } else {
        // 중복된 데이터가 없는 경우에만 좋아요 추가
        const {data, error} = await supabase
          .from('posts')
          .update({like: initialLikes + 1, like_userInfo: [...userLikes, user]})
          .eq('id', id);

        if (error) {
          console.log('좋아요 추가 실패', error);
        } else {
          console.log('좋아요 추가 완료');
        }
      }
    } else {
      console.log('존재하지 않는 데이터');
    }
  } catch (error) {
    console.log('좋아요 처리 실패', error);
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
  getInitialLikes,
  addLikePost,
  // uploadStoragePostImg,
  // uploadPostImg,
};
