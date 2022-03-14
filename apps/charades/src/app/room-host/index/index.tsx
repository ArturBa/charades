import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Link, Routes } from 'react-router-dom';

import styled from 'styled-components';
import Header from '../header/header';
import { roomHostActions } from '../room-host.slice';

/* eslint-disable-next-line */
export interface HostProps {}

const StyledHost = styled.div`
  /* color: pink; */
`;

export function Index(props: HostProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      roomHostActions.add({ id: 1, name: 'Joanna', color: 'hsl(20, 70%, 50%)' })
    );
  }, [dispatch]);

  return (
    <StyledHost>
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
    </StyledHost>
  );
}

export default Index;
