import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const ROOM_FEATURE_KEY = 'room';

/*
 * Update these interfaces according to your requirements.
 */
export interface RoomEntity {
  id: number;
}

export interface RoomState extends EntityState<RoomEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const roomAdapter = createEntityAdapter<RoomEntity>();

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
 *   dispatch(fetchRoom())
 * }, [dispatch]);
 * ```
 */
export const fetchRoom = createAsyncThunk(
  'room/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getRooms()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialRoomState: RoomState = roomAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const roomSlice = createSlice({
  name: ROOM_FEATURE_KEY,
  initialState: initialRoomState,
  reducers: {
    add: roomAdapter.addOne,
    remove: roomAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoom.pending, (state: RoomState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchRoom.fulfilled,
        (state: RoomState, action: PayloadAction<RoomEntity[]>) => {
          roomAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchRoom.rejected, (state: RoomState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message as string;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const roomReducer = roomSlice.reducer;

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
 *   dispatch(roomActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const roomActions = roomSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllRoom);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = roomAdapter.getSelectors();

export const getRoomState = (rootState: any): RoomState =>
  rootState[ROOM_FEATURE_KEY];

export const selectAllRoom = createSelector(getRoomState, selectAll);

export const selectRoomEntities = createSelector(getRoomState, selectEntities);
