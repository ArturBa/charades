import React from 'react';
import { Route, Routes } from 'react-router';

import { BackgroundRoutingOutlet } from '@charades/components';

import GlobalStyles from './styles/Global.style';
import Home from './home/home';
import JoinGame from './join-game/join-game';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<BackgroundRoutingOutlet />}>
          <Route index element={<Home />} />
          <Route path="join-game" element={<JoinGame />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
