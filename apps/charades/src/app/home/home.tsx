import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    padding: 16px;
  }
`;

export function Home(props: HomeProps) {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const onHostGame = (): void => {
    navigate('/host');
  };

  return (
    <StyledHome>
      <h1>{t('home')}</h1>
      <h2>Grab your friends and play together</h2>
      <button onClick={onHostGame}>Host a game</button>
    </StyledHome>
  );
}

export default Home;
