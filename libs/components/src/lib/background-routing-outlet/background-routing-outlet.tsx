import { Outlet } from 'react-router';
import styled from 'styled-components';

import Background from '../background/background';

/* eslint-disable-next-line */
export interface BackgroundRoutingOutletProps {}

const StyledBackgroundRoutingOutlet = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`;

export function BackgroundRoutingOutlet(props: BackgroundRoutingOutletProps) {
  return (
    <StyledBackgroundRoutingOutlet>
      <Background>
        <Outlet />
      </Background>
    </StyledBackgroundRoutingOutlet>
  );
}

export default BackgroundRoutingOutlet;
