import styled from 'styled-components';

import { User } from '@charades/components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  width: 100%;
  height: 96px;
  background: linear-gradient(
    180deg,
    hsl(0, 0%, 60%) 0%,
    hsla(0, 0%, 0%, 0) 100%
  );

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 24px;
  gap: 24px;
  font-size: 2rem;

  .countdown {
    font-size: 4rem;
    font-weight: bold;
  }
  .warning {
    color: hsl(0, 80%, 30%);
  }
`;

export function Header(props: HeaderProps) {
  const countdownClasses = ['countdown', 'warning'].join(' ');
  const users = [
    {
      id: 124124,
      userName: 'Kris',
      color: 'hsl(70, 70%, 60%)',
    },
    {
      id: 224124,
      userName: 'Joanna',
      color: 'hsl(170, 70%, 60%)',
    },
  ];

  return (
    <StyledHeader>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <div className={countdownClasses}>1:40</div>
    </StyledHeader>
  );
}

export default Header;
