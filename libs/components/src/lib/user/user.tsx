import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface UserProps {
  userName?: boolean;
  user: { userName: string; color: string };
}

const StyledUser = styled.div.attrs((props) => ({
  color: props?.color || 'hsl(200, 70%, 70%)',
}))`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  .circle {
    height: 2em;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${(props) => props.color};

    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export function User(props: UserProps) {
  return (
    <StyledUser color={props.user.color}>
      <div className="circle">
        <span>{props.user.userName.toUpperCase()[0]}</span>
      </div>
      {props.userName ? <span>{props.user.userName}</span> : null}
    </StyledUser>
  );
}

export default User;
