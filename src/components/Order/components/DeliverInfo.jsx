import { colors } from '../../../styles/constants/colors';
import {
    DeliverInfoSection,
    H2,
    Form,
    Fieldset,
    Legend,
    WrapperInput,
    WrapperAddress,
    WideInput,
    PhoneInput,
    Input,
    Dash,
} from '../../../styles/components/Order/DeliverInfo.style';
import { SmButton } from '../../../styles/modules/_Button';

function DeliverInfo() {
    return (
        <>
            <DeliverInfoSection>
                <H2>배송정보</H2>
                <Form>
                    <Fieldset>
                        <Legend>주문자 정보</Legend>

                        <WrapperInput>
                            <label htmlFor="name">이름</label>
                            <Input type="text" />
                        </WrapperInput>

                        <WrapperInput>
                            <label htmlFor="phoneNumber">휴대폰</label>
                            <PhoneInput type="text" maxLength="3" />
                            <Dash>-</Dash>
                            <PhoneInput type="text" maxLength="4" />
                            <Dash>-</Dash>
                            <PhoneInput type="text" maxLength="4" />
                        </WrapperInput>

                        <WrapperInput>
                            <label htmlFor="name">이메일</label>
                            <Input type="email" />
                        </WrapperInput>
                    </Fieldset>
                </Form>
                <Form>
                    <Fieldset>
                        <Legend>배송지 정보</Legend>

                        <WrapperInput>
                            <label htmlFor="name">수령인</label>
                            <Input type="text" />
                        </WrapperInput>

                        <WrapperInput>
                            <label htmlFor="phoneNumber">휴대폰</label>
                            <PhoneInput type="text" maxLength="3" />
                            <Dash>-</Dash>
                            <PhoneInput type="text" maxLength="4" />
                            <Dash>-</Dash>
                            <PhoneInput type="text" maxLength="4" />
                        </WrapperInput>

                        <WrapperInput>
                            <WrapperAddress>
                                <label htmlFor="address">배송주소</label>
                                <div>
                                    <div>
                                        <input type="text" maxLength={'6'} />
                                        <SmButton
                                            background={`${colors.green}`}
                                        >
                                            우편번호 조회
                                        </SmButton>
                                    </div>
                                    <WideInput type="text" />
                                    <WideInput type="text" />
                                </div>
                            </WrapperAddress>
                        </WrapperInput>
                        <WrapperInput>
                            <label htmlFor="message">배송메세지</label>
                            <WideInput type="text" />
                        </WrapperInput>
                    </Fieldset>
                </Form>
            </DeliverInfoSection>
        </>
    );
}

export default DeliverInfo;
