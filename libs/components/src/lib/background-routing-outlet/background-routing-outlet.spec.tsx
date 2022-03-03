import { render } from '@testing-library/react';

import BackgroundRoutingOutlet from './background-routing-outlet';

describe('BackgroundRoutingOutlet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackgroundRoutingOutlet />);
    expect(baseElement).toBeTruthy();
  });
});
