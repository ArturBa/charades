import { render } from '@testing-library/react';

import JoinGame from './join-game';

describe('JoinGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JoinGame />);
    expect(baseElement).toBeTruthy();
  });
});
