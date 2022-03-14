import { render } from '@testing-library/react';

import RoomHostIndex from '.';

describe('Host', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RoomHostIndex />);
    expect(baseElement).toBeTruthy();
  });
});
