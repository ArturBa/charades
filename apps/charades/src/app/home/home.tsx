import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { Button } from '@charades/web/components';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function Home(props: HomeProps) {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const onHostGame = (): void => {
    navigate('/host/create');
  };

  return (
    <StyledHome>
      <h1>{t('home.title')}</h1>
      <h2>{t('home.description')}</h2>
      <Button onClick={onHostGame}>{t('home.host-game')}</Button>
    </StyledHome>
  );
}

export default Home;
