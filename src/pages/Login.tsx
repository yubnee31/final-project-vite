import Signin from '../components/Auth/Signin';
import {useRecoilState} from 'recoil';
import {loginState} from '../shared/recoil/authAtom';
import {Navigate} from 'react-router-dom';
const Login = () => {
  const [login] = useRecoilState(loginState);
  if (login) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Signin />
    </div>
  );
};
export default Login;
