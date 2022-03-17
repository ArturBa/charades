import styled from 'styled-components';

/* eslint-disable-next-line */
export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const StyledInput = styled.input``;

export function Input(props: InputProps) {
  return <input></input>;
}

export default Input;
