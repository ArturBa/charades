import styled from 'styled-components';

/* eslint-disable-next-line */
export interface JoinGameProps {}

const StyledJoinGame = styled.div`
  color: pink;
`;

export function JoinGame(props: JoinGameProps) {
  return (
    <StyledJoinGame>
      <h1>Welcome to JoinGame!</h1>
    </StyledJoinGame>
  );
}

export default JoinGame;
