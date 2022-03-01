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
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <h1>Welcome to charades!</h1>
      <h2>Grab your friends and play together</h2>
    </StyledHome>
  );
}

export default Home;
