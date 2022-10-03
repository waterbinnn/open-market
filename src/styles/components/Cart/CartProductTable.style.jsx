import styled from '@emotion/styled';

export const CartTable = styled.table`
  width: 90%;
  margin: 0 auto;
`;

export const Thead = styled.thead`
  display: block;
  margin-bottom: 20px;
  background: #f2f2f2;
  border-radius: 10px;
  width: 90%;
  margin: 0 auto 35px;

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    margin: 0 auto;
    th:nth-of-type(1) {
      width: 30px;
      margin-right: 40px;
    }
    th:nth-of-type(2) {
      width: 614px;
      margin-right: 48px;
    }
    th:nth-of-type(3) {
      width: 150px;
      margin-right: -10px;
    }
    th:nth-of-type(4) {
      width: 295px;
    }
  }
`;

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
