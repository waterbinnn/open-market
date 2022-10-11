import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '../../react-query/queryClient';
import AuthContextProvider from '../../auth/AuthContext';
import Routers from './Routes';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Routers />
          <ReactQueryDevtools />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
