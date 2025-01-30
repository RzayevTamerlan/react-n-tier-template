import type { FC, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

import styles from './large-button.module.scss';

type LargeButtonProps = {
  children: ReactNode;
};

const LargeButton: FC<LargeButtonProps> = ({ children }) => {
  // Cloning each child and passing the className prop
  const clonedChildren = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<{ className?: string }>, {
        className: styles['large-button'],
      });
    }

    return child;
  });

  return <>{clonedChildren}</>;
};

export default LargeButton;
