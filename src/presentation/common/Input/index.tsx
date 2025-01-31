import TextInputProvider from '@presentation/ui/TextInput';
import type { FC } from 'react';

import styles from './input.module.scss';

interface InputProps {
  name: string;
  placeholder?: string;
  className?: string;
  fieldsetClassName?: string;
}

const Input: FC<InputProps> = ({ name, placeholder, fieldsetClassName, className }) => {
  return (
    <TextInputProvider
      fieldsetClassName={fieldsetClassName}
      name={name}
      placeholder={placeholder}
      className={`${styles.inputWrapper} ${className || ''}`}
    >
      <TextInputProvider.TextInputLabel>
        <label className={styles.label}>{name}</label>
      </TextInputProvider.TextInputLabel>
      <TextInputProvider.TextInputAddonLeft>
        <span className={styles.addon}>🔍</span>
      </TextInputProvider.TextInputAddonLeft>
      <TextInputProvider.TextInputAddonRight>
        <span className={styles.addon}>⚙️</span>
      </TextInputProvider.TextInputAddonRight>
    </TextInputProvider>
  );
};

export default Input;
