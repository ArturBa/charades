import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CreateRoom from '../create-room/create-room';
import Header from '../header/header';
import JoinRoom from '../join-room/join-room';

/* eslint-disable-next-line */
export interface HostProps {}

const StyledHost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .content {
    width: clamp(400px, 70vw, 1300px);
  }
`;

export function Index(props: HostProps) {
  return (
    <StyledHost>
      <Header />
      <section className="content">
        <Routes>
          <Route path="/" element={<CreateRoom />} />
          <Route path="create" element={<CreateRoom />} />
          <Route path="join" element={<JoinRoom />} />
        </Routes>
      </section>
    </StyledHost>
  );
}

export default Index;
