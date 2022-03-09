import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { BackgroundRoutingOutlet } from '@charades/components';

import GlobalStyles from './styles/Global.style';
import { defaultTheme } from './styles/Theme.style';
import Home from './home/home';
import Room from './room/room';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<BackgroundRoutingOutlet />}>
          <Route index element={<Home />} />
          <Route path="room" element={<Room />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
