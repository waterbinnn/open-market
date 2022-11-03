import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../../react-query/queryClient';
import Routers from './Routes';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routers />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
