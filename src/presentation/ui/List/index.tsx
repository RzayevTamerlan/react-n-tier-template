import type { FC, HTMLAttributes } from 'react';
import { Children } from 'react';

type ListProps = HTMLAttributes<HTMLUListElement>;

const List: FC<ListProps> = props => {
  const { children, ...rest } = props;

  // Now I have to clone all children and wrap them with li tag
  const childrenWithLi = Children.map(children, child => {
    return <li>{child}</li>;
  });

  return <ul {...rest}>{childrenWithLi}</ul>;
};

export default List;
