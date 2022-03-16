import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import CreateRoom from '../create-room/create-room';
import Header from '../header/header';
import { roomHostActions } from '../room-host.slice';

/* eslint-disable-next-line */
export interface HostProps {}

const StyledHost = styled.div`
  /* color: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: clamp(400px, 70vw, 1300px);
  }
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
      <section className="content">
        <Routes>
          <Route index element={<CreateRoom />} />
        </Routes>
      </section>
    </StyledHost>
  );
}

export default Index;
