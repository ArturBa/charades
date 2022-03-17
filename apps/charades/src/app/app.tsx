import React from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { Background } from '@charades/web/components';

import GlobalStyles from './styles/Global.style';
import { defaultTheme } from './styles/Theme.style';
import Home from './home/home';
import { initI18n } from './i18n.service';
import { Suspense } from 'react';

const defaultLanguage = 'en';
initI18n('./assets/i18n/{{lng}}.json', defaultLanguage);

export const App = () => {
  const RoomHostIndex = React.lazy(() => import('./room-host/index'));

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Suspense fallback={<div>Loading languages...</div>}>
        <Background>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="host" element={<RoomHostIndex />} />
          </Routes>
        </Background>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
