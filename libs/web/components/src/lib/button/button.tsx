import './button.scss';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button(props: ButtonProps) {
  return <button {...props}>{props.children}</button>;
}

export default Button;
