import React, {useEffect} from 'react';
import Artistchart from '../components/like/Artistchart';
import {supabase} from '../api/supabase';

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
  return (
    <div>
      <Artistchart />
    </div>
  );
};

export default Artist;
