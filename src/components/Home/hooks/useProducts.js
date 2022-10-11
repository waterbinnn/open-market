import { useQuery, useQueryClient } from 'react-query';

import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';

async function getProducts() {
  const { data } = await axiosInstance.get('/products');
  const productList = data.results;
  return productList;
}

export default function useProducts() {
  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.products, getProducts);
  return data;
}

export function usePrefetchProducts() {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(queryKeys.products, getProducts);
}
