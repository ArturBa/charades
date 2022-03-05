import { Header } from '@charades/web/component';
import { Route, Link, Routes } from 'react-router-dom';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RoomProps {}

const StyledRoom = styled.div``;

export function Room(props: RoomProps) {
  return (
    <StyledRoom>
      <Header />
      <h1>Welcome to Room!</h1>

      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/room">room root</Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<div>This is the room root route.</div>} />
      </Routes>
    </StyledRoom>
  );
}

export default Room;
