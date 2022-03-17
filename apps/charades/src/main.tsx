import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureAppStore } from '@charades/web/store';

import App from './app/app';
const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
