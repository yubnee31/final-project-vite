import {supabase} from './supabase';

// 처음에 초기 포스트 목록을 가져오는 함수
export const getInitialPosts = async (artistName: string) => {
  try {
    const {data, error} = await supabase.from('posts').select('*').eq('artist', artistName);

    return data;
  } catch (error) {
    console.error('Error fetching initial posts', error);
    throw error;
  }
};

// 추가 포스트를 가져오는 함수
export const morePosts = async (pageParam, artistName) => {
  try {
    // 페이지 매개 변수를 사용하여 데이터를 가져오기
    const {data} = await supabase
      .from('posts')
      .select('*')
      .eq('artist', artistName)
      .range(pageParam.start, pageParam.end);

    console.log('morePosts', data);

    // 여기서 nextCursor와 prevCursor를 반환하도록 조정
    return {
      data,
      nextCursor: pageParam.end + 1,
      prevCursor: pageParam.start - 1,
    };
  } catch (error) {
    console.error('Error fetching more posts', error);
    throw error;
  }
};
