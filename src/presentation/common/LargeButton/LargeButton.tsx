import type { FC, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

import styles from './large-button.module.scss';

type LargeButtonProps = {
  children: ReactNode;
};

const LargeButton: FC<LargeButtonProps> = ({ children }) => {
  // Cloning each child and merging the className prop
  const clonedChildren = Children.toArray(children).map(child => {
    if (isValidElement(child)) {
      const existingClassName = child.props.className || '';
      return cloneElement(child as ReactElement<{ className?: string }>, {
        className: `${existingClassName} ${styles.largeButton}`.trim(),
      });
    }

    return child;
  });

  return <>{clonedChildren}</>;
};

export default LargeButton;
