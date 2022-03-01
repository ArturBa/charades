import React from 'react';

import { Background } from '@charades/components';
import GlobalStyles from './styles/Global.style';
import Home from './home/home';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Home></Home>
      </Background>
    </>
  );
};

export default App;
