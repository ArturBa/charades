import { fetchRoom, roomAdapter, roomReducer } from './room.slice';

describe('room reducer', () => {
  it('should handle initial state', () => {
    const expected = roomAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(roomReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchRooms', () => {
    let state = roomReducer(undefined, fetchRoom.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = roomReducer(state, fetchRoom.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = roomReducer(
      state,
      fetchRoom.rejected(new Error('Uh oh'), null, null)
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
