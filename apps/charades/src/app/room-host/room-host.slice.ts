import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const ROOM_HOST_FEATURE_KEY = 'roomHost';

/*
 * Update these interfaces according to your requirements.
 */
export interface UserHostEntity {
  id: number;
  name: string;
  color: string;
}

export interface RoomHostState extends EntityState<UserHostEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
  code: number | null;
}

export const roomHostAdapter = createEntityAdapter<UserHostEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchRoomHost())
 * }, [dispatch]);
 * ```
 */
export const fetchRoomHost = createAsyncThunk(
  'roomHost/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getRoomHosts()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialRoomHostState: RoomHostState =
  roomHostAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
    code: null,
  });

export const roomHostSlice = createSlice({
  name: ROOM_HOST_FEATURE_KEY,
  initialState: initialRoomHostState,
  reducers: {
    add: roomHostAdapter.addOne,
    remove: roomHostAdapter.removeOne,
    addMany: roomHostAdapter.addMany,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomHost.pending, (state: RoomHostState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchRoomHost.fulfilled,
        (state: RoomHostState, action: PayloadAction<UserHostEntity[]>) => {
          roomHostAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchRoomHost.rejected, (state: RoomHostState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message as string;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const roomHostReducer = roomHostSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(roomHostActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const roomHostActions = roomHostSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllRoomHost);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = roomHostAdapter.getSelectors();

export const getRoomHostState = (rootState: {
  [key: string]: RoomHostState;
}): RoomHostState => rootState[ROOM_HOST_FEATURE_KEY];

export const selectAllRoomHost = createSelector(getRoomHostState, selectAll);

export const selectRoomHostEntities = createSelector(
  getRoomHostState,
  selectEntities
);
