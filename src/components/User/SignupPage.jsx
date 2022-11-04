import { Link, useNavigate } from 'react-router-dom';

import { getUser, clearUser } from '../../user-storage';

//Assets
import logo from '../../assets/images/Logo-hodu.png';

//Styles
import {
  CustomerLink,
  SellerLink,
} from '../../styles/components/User/SignupForm.style';

import {
  Section,
  ImgLogo,
} from '../../styles/components/Common/FormStyles.style';
import SignupForm from './components/SignupForm';

function Signup() {
  const navigate = useNavigate();
  const user = getUser();

  const Logout = () => {
    clearUser();
    location.reload();
    navigate('/signUp');
  };

  if (user) {
    return (
      <>
        <h1>
          이미 로그인한 회원입니다.
          <br />
          로그아웃 후 가입하시겠습니까?
        </h1>
        <Link to="/">홈으로 이동</Link>
        <button onClick={Logout}>로그아웃</button>
      </>
    );
  }

  return (
    <>
      <Section>
        <Link to="/">
          <ImgLogo src={logo} alt="호두마켓" />
        </Link>
        <CustomerLink href="/signup">구매회원가입</CustomerLink>
        <SellerLink href="/seller-signup">판매회원가입</SellerLink>
        <SignupForm />
      </Section>
    </>
  );
}
export default Signup;
