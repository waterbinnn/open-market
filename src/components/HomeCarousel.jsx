/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import swiperLeft from '../assets/icons/icon-swiper-1.svg';
import swiperRight from '../assets/icons/icon-swiper-2.svg';
import { H2VisuallyHidden } from '../styles/modules/styles';

const Container = styled.section`
    position: relative;
    width: 100%;
    height: 500px;
    background: #f2f2f2;
    margin-top: 91px;
`;

const LeftIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translate(-50%, -50%);
`;
const RightIcon = styled.img`
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translate(-50%, -50%);
`;

function HomeCarousel() {
    return (
        <>
            <Container>
                <H2VisuallyHidden>추천상품</H2VisuallyHidden>
                <LeftIcon src={swiperLeft} alt="왼쪽버튼" />
                <RightIcon src={swiperRight} alt="오른쪽버튼" />
            </Container>
        </>
    );
}

export default HomeCarousel;
