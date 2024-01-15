import {useEffect} from 'react';

import {supabase} from '../api/supabase';

import Artistchart from '../components/like/Artistchart';

const Artist = () => {
  useEffect(() => {
    const userInfo = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      console.log(user);
    };
    userInfo();
  }, []);
  return <></>;
};

export default Artist;
