import React from 'react';
import AppProvider from './components/utils/context/AppProvider';
import Routing from './components/utils/Routing';

function App() {
  return (
  <AppProvider>
    <Routing />
  </AppProvider>
  );
}

export default App;
