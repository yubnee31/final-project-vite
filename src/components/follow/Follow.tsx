import {useRecoilState} from 'recoil';
import {followState} from '../../shared/recoil/recoilAtoms';

interface FollowButtonProps {
  userId: string;
}
const Follow = ({userId}: FollowButtonProps) => {
  const [followList, setFollowList] = useRecoilState(followState);
  const handleFollowClick = () => {
    // 팔로우 상태를 업데이트
    setFollowList(prevFollowList => [...prevFollowList, userId]);
  };

  return <button onClick={handleFollowClick}>팔로우</button>;
};

export default Follow;
