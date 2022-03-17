import styled from 'styled-components';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Button } from '@charades/web/components';

/* eslint-disable-next-line */
export interface CreateRoomProps {}

const StyledCreateRoom = styled.div`
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  button {
    align-self: flex-end;
  }
`;

export function CreateRoom(props: CreateRoomProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onRoomCreate = (e: SyntheticEvent): void => {
    e.preventDefault();
    navigate('join');
  };

  return (
    <StyledCreateRoom>
      <h1>{t('room-host.create-room.title')}</h1>
      <form onSubmit={onRoomCreate}>
        <Button>{t('room-host.create-room.create')}</Button>
      </form>
    </StyledCreateRoom>
  );
}

export default CreateRoom;
