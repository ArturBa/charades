import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { BackgroundRoutingOutlet } from '@charades/components';

import GlobalStyles from './styles/Global.style';
import { defaultTheme } from './styles/Theme.style';
import Home from './home/home';
import { Index as RoomHostIndex } from './room-host/index';
import { initI18n } from './i18n.service';
import { useEffect } from 'react';

export const App = () => {
  const defaultLanguage = 'en';

  useEffect(() => {
    initI18n('./assets/i18n/{{lng}}.json', defaultLanguage);
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<BackgroundRoutingOutlet />}>
          <Route index element={<Home />} />
          <Route path="host" element={<RoomHostIndex />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
