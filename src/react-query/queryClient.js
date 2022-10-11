import { QueryClient } from 'react-query';
import NotFound from '../components/Common/NotFound';

function queryErrorHandler() {
  return <NotFound />;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});
