import { Link } from 'react-router-dom';

//Assets
import logo from '../assets/images/Logo-hodu.png';
//Styles
import { Input, Nav, ErrorMsg } from '../styles/pages/LoginForm.style';
import { MdButton } from '../styles/modules/_Button';
import { CustomerLink, SellerLink } from '../styles/pages/SignupForm.style';
import {
    Section,
    ImgLogo,
    FormStyle,
    Fieldset,
} from '../styles/components/FormStyles.style';

function Login() {
    return (
        <>
            <Section>
                <ImgLogo src={logo} alt="호두마켓" />
                <CustomerLink href="/login">구매회원 로그인</CustomerLink>
                <SellerLink href="#">판매회원 로그인</SellerLink>
                <FormStyle>
                    <Fieldset>
                        <legend className="visually-hidden">로그인</legend>
                        <label htmlFor="email" className="visually-hidden">
                            아이디
                        </label>
                        <Input type="text" placeholder="아이디" />
                        <label className="visually-hidden" htmlFor="password">
                            비밀번호
                        </label>
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            minLength="6"
                            maxLength="16"
                        />
                        <ErrorMsg>
                            아이디 또는 비밀번호가 일치하지 않습니다.
                        </ErrorMsg>
                    </Fieldset>
                    <MdButton
                        padding={'19px 0'}
                        width={'100%'}
                        type="submit"
                        margin={'26px 0 0'}
                    >
                        로그인
                    </MdButton>
                </FormStyle>
                <Nav>
                    <Link to="/signup">회원가입</Link>
                    <span>|</span>
                    <Link to="/">비밀번호 찾기</Link>
                </Nav>
            </Section>
        </>
    );
}

export default Login;
