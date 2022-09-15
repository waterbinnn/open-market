import React from 'react';

function DeliverInfo() {
    return (
        <>
            <section>
                <h2>배송정보</h2>
                <form>
                    <fieldset>
                        <legend>주문자 정보</legend>

                        <div>
                            <label htmlFor="name">이름</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="phoneNumber">휴대폰</label>
                            <input type="text" maxLength="3" />
                            <input type="text" maxLength="4" />
                            <input type="text" maxLength="4" />
                        </div>

                        <div>
                            <label htmlFor="name">이메일</label>
                            <input type="email" />
                        </div>
                    </fieldset>
                </form>
                <form>
                    <fieldset>
                        <legend>배송지 정보</legend>

                        <div>
                            <label htmlFor="name">이름</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label htmlFor="phoneNumber">휴대폰</label>
                            <input type="text" maxLength="3" />
                            <input type="text" maxLength="4" />
                            <input type="text" maxLength="4" />
                        </div>

                        <div>
                            <label htmlFor="address">배송주소</label>
                            <div>
                                <input type="text" maxLength={'6'} />
                                <button>우편번호 조회</button>
                            </div>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="message">배송메세지</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    );
}

export default DeliverInfo;
