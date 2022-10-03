/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { colors } from '../styles/constants/colors';
import styled from '@emotion/styled';

import plus from '../assets/icons/icon-plus-line.svg';
import minus from '../assets/icons/icon-minus-line.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  height: fit-content;

  strong {
    padding-top: 15px;
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid ${colors.border};
    border-top: none;
    border-bottom: none;
  }

  img {
    padding: 5px 15px;
    width: 50px;
    height: 50px;
  }
`;

function Amount(props) {
  const { counter, setCounter, stock } = props;
  const [disabledBtn, setDisabledBtn] = useState(false);
  const handleCount = (e) => {
    if (e.target.id === 'minus') {
      if (counter <= 0) {
        setDisabledBtn(true);
      } else {
        setCounter(counter - 1);
        setDisabledBtn(false);
      }
    } else {
      if (counter === stock) {
        setDisabledBtn(true);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <Wrapper>
      <button onClick={handleCount}>
        <img id="minus" src={minus} alt="빼기" disabled={disabledBtn} />
      </button>
      <strong>{counter}</strong>
      <button onClick={handleCount}>
        <img id="plus" src={plus} alt="추가" />
      </button>
    </Wrapper>
  );
}

export default Amount;
