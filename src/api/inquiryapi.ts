import {supabase} from './supabase';

//inquiry open
export const getInquiry = async () => {
  try {
    const {data} = await supabase.from('inquiry').select('*');
  } catch (error) {
    console.log('문의 리스트 가져오기 실패', error);
  }
};

//inquiry add
export const addInquiry = async (inquiryPost: string) => {
  try {
    const {data} = await supabase.from('inquiry').insert(inquiryPost);
  } catch (error) {
    console.log('문의 내용 보내기 실패', error);
  }
};

//inquiry delete
export const deleteInquiry = async (id: number) => {
  try {
    const {data} = await supabase.from('inquiry').delete().eq('id', id);
  } catch (error) {
    console.log('문의 내용 삭제 실패', error);
  }
};

export const updateInquiry = async(inquiryindex:string) =>{
    try {
        const {data} = await supabase.from('inquiry').update({inquiry-post:inquiryindex}).eq('id',id)
    } catch (error) {
        console.log('문의 내용 업데이트 실패',error)
    }
}