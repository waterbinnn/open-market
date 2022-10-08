import React from 'react';
import AuthContextProvider from '../../auth/AuthContext';
import Routers from './Routes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routers />
      </AuthContextProvider>
    </>
  );
}

export default App;
