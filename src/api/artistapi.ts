import { supabase } from './supabase';

export const getArtistList = async () => {
    try {
        const { data } = await supabase.from('testTable').select('*');
        return data
    } catch (error) {
        console.log('조회 에러', error);
    }
};
