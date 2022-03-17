import { fetchRoot, rootAdapter, rootReducer } from './root.slice';

describe('root reducer', () => {
  it('should handle initial state', () => {
    const expected = rootAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(rootReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchRoots', () => {
    let state = rootReducer(undefined, fetchRoot.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = rootReducer(state, fetchRoot.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = rootReducer(
      state,
      fetchRoot.rejected(new Error('Uh oh'), null, null)
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
