import {
  fetchRoomHost,
  roomHostAdapter,
  roomHostReducer,
} from './room-host.slice';

describe('roomHost reducer', () => {
  it('should handle initial state', () => {
    const expected = roomHostAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(roomHostReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchRoomHosts', () => {
    let state = roomHostReducer(undefined, fetchRoomHost.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = roomHostReducer(
      state,
      fetchRoomHost.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = roomHostReducer(
      state,
      fetchRoomHost.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
