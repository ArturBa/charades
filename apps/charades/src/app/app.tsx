import React from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { BackgroundRoutingOutlet } from '@charades/components';

import GlobalStyles from './styles/Global.style';
import Home from './home/home';
import JoinGame from './join-game/join-game';
import { defaultTheme } from './styles/Theme.style';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<BackgroundRoutingOutlet />}>
          <Route index element={<Home />} />
          <Route path="join-game" element={<JoinGame />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
