import Title from '@presentation/ui/Title';
import type { FC, ReactNode } from 'react';

import styles from './section-heading.module.scss';

type SectionHeadingProps = {
  children: ReactNode;
  position?: 'left' | 'center' | 'right';
};

const SectionHeading: FC<SectionHeadingProps> = ({ children, position = 'center' }) => {
  return (
    <div className={`${styles['sectionHeading']} ${styles[position]}`}>
      <Title as={'h2'}>{children}</Title>
      <hr className={styles.underline}></hr>
    </div>
  );
};

export default SectionHeading;
