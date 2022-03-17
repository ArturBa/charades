import { configureStore } from '@reduxjs/toolkit';
import {
  ROOM_HOST_FEATURE_KEY,
  roomHostReducer,
} from '../room-host/room-host.slice';

const isDevelopment = process.env['NODE_ENV'] === 'development';

export function configureAppStore() {
  const store = configureStore({
    reducer: {
      [ROOM_HOST_FEATURE_KEY]: roomHostReducer,
    },
    middleware: isDevelopment ? [] : [],
    devTools: isDevelopment,
  });

  return store;
}
