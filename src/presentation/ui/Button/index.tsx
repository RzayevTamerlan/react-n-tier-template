import type { FC, HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = props => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

export default Button;
