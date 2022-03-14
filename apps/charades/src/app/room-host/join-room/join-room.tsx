import styled from 'styled-components';

/* eslint-disable-next-line */
export interface JoinRoomProps {}

const StyledJoinRoom = styled.div`
  color: pink;
`;

export function JoinRoom(props: JoinRoomProps) {
  return (
    <StyledJoinRoom>
      <h1>Welcome to JoinRoom!</h1>
    </StyledJoinRoom>
  );
}

export default JoinRoom;
