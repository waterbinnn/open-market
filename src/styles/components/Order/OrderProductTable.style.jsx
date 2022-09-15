import styled from '@emotion/styled';

export const OrderTable = styled.table`
    width: 90%;
    margin: 0 auto;
`;

export const Thead = styled.thead`
    display: block;
    margin-bottom: 16px;
    background: #f2f2f2;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto 16px;

    tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 0 20px;
        margin: 0 auto;
        th:nth-of-type(1) {
            width: 580px;
            margin-right: 40px;
        }
        th:nth-of-type(2) {
            width: 150px;
            margin-right: 48px;
        }
        th:nth-of-type(3) {
            width: 150px;
            margin-right: 48px;
        }
        th:nth-of-type(4) {
            width: 150px;
        }
    }
`;

export const Tbody = styled.tbody`
    display: flex;
    flex-direction: column;
`;

export const Tfoot = styled.tfoot`
    margin-top: 14px;
    width: 1116px;
    display: flex;
    justify-content: flex-end;
    tr {
        display: flex;
        align-items: center;
    }
`;
export const TotalPrice = styled.th`
    display: inline-table;
    margin: 3px 10px 0 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
`;
