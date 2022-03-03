import styled from 'styled-components';

import { Header } from '@charades/web/component';

/* eslint-disable-next-line */
export interface JoinGameProps {}

const StyledJoinGame = styled.div``;

export function JoinGame(props: JoinGameProps) {
  return (
    <StyledJoinGame>
      <Header />
    </StyledJoinGame>
  );
}

export default JoinGame;
