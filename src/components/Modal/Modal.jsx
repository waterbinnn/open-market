import ModalPortal from './ModalPortal';
import closeIcon from '../../assets/icons/icon-delete.svg';
import { colors } from '../../styles/constants/colors';
import {
    Container,
    ModalSection,
    WrapperItems,
    CloseBtn,
    Text,
} from '../../styles/modules/Modal.Style';

import { MsButton } from '../../styles/modules/_Button';

function Modal(props) {
    const { isModal, setIsModal, text, btnText } = props;

    return (
        <ModalPortal>
            <Container>
                <ModalSection>
                    <h2 className="visually-hidden">모달창</h2>
                    <CloseBtn type="button">
                        <img src={closeIcon} alt="닫기" />
                    </CloseBtn>
                    <WrapperItems>
                        <Text>{text}</Text>
                        <div>
                            <MsButton
                                background={`${colors.white}`}
                                color={`${colors.dark}`}
                            >
                                취소
                            </MsButton>
                            <MsButton background={`${colors.green}`}>
                                {btnText}
                            </MsButton>
                        </div>
                    </WrapperItems>
                </ModalSection>
            </Container>
        </ModalPortal>
    );
}

export default Modal;
