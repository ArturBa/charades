import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CreateRoomProps {}

const StyledCreateRoom = styled.div`
  color: pink;
`;

export function CreateRoom(props: CreateRoomProps) {
  return (
    <StyledCreateRoom>
      <h1>Welcome to CreateRoom!</h1>
    </StyledCreateRoom>
  );
}

export default CreateRoom;
