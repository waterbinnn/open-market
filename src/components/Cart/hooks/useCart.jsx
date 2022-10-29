import { useQuery, useQueryClient } from 'react-query';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import axios from 'axios';
import { queryKeys } from '../../../react-query/constants';

const baseUrl = 'https://openmarket.weniv.co.kr';

const test =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoiYnV5ZXIxIiwiZXhwIjoxNjY3NjQ3NTUxfQ.6g4qotNFMlzPRG_ApXyP8DV9Cird28flX-Q0V1BkHAg';

export async function getCart() {
  const { token } = useContext(AuthContext);

  const { data } = await axios.get(baseUrl + '/cart/', {
    headers: {
      Authorization: `JWT ${JSON.parse(token)}`,
    },
  });
  return data;
}

export function useCart() {
  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.cart, getCart);

  console.log('fall', fallback);
  return data;
}
