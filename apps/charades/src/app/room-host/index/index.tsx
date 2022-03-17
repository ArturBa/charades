import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import CreateRoom from '../create-room/create-room';
import Header from '../header/header';

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
