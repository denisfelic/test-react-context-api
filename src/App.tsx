import React from 'react';
import Counter from './Components/Counter';
import Mirror from './Components/Mirror';
import CountProvider from './Context/CountContext';

function App() {

  return (
    <CountProvider>
      <Counter />
      <hr/>
      <Mirror />
    </CountProvider>
  );
}

export default App;
