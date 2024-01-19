import { supabase } from './supabase';

export const getArtistList = async () => {
    try {
        const { data } = await supabase.from('testTable').select('*');
        return data
    } catch (error) {
        console.log('error', error);
    }
};

export const getArtistSchedule = async () => {
    try {
        const { data } = await supabase.from('schedule').select('*');
        return data
    } catch (error) {
        console.log('error', error);
    }
};