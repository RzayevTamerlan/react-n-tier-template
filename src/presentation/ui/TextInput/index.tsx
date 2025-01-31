import { FC, HTMLAttributes, ReactElement, ReactNode, useEffect } from 'react';
import { Children, cloneElement, createContext, isValidElement, useContext, useState } from 'react';

type TextInputProviderProps = HTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
  name?: string;
  placeholder?: string;
  fieldsetClassName?: string;
};

type TextInputComponent = FC<TextInputProviderProps> & {
  TextInputLabel: FC<TextInputLabelProps>;
  TextInputAddonLeft: FC<TextInputAddonProps>;
  TextInputAddonRight: FC<TextInputAddonProps>;
};

type TextInputAddonProps = {
  children: ReactNode;
};

type TextInputLabelProps = {
  children: ReactNode;
};

type TextInputContextType = {
  name?: string;
  id?: string;
  label?: ReactNode;
  rightAddon?: ReactNode;
  leftAddon?: ReactNode;
  setLabel: (label: ReactNode) => void;
  setRightAddon: (rightAddon: ReactNode) => void;
  setLeftAddon: (leftAddon: ReactNode) => void;
};

const TextInputContext = createContext<TextInputContextType>({
  setLabel: () => {},
  setRightAddon: () => {},
  setLeftAddon: () => {},
});

const useTextInput = () => {
  const context = useContext(TextInputContext);

  if (!context) {
    throw new Error('useTextInput must be used within a TextInputProvider');
  }

  return context;
};

const TextInputProvider: TextInputComponent = props => {
  const { children, ...rest } = props;
  const [leftAddon, setLeftAddon] = useState<ReactNode>(null);
  const [rightAddon, setRightAddon] = useState<ReactNode>(null);
  const [label, setLabel] = useState<ReactNode>(null);

  return (
    <TextInputContext.Provider
      value={{
        name: rest.name,
        id: rest.id,
        setLabel,
        setRightAddon,
        setLeftAddon,
      }}
    >
      <fieldset className={rest.fieldsetClassName}>
        {children}
        {label ? label : null}
        <input {...rest} />
        {rightAddon ? rightAddon : null}
        {leftAddon ? leftAddon : null}
      </fieldset>
    </TextInputContext.Provider>
  );
};

const TextInputAddonLeft: FC<TextInputAddonProps> = ({ children }) => {
  const { setLeftAddon } = useTextInput();

  useEffect(() => {
    setLeftAddon(children);

    return () => {
      setLeftAddon(null);
    };
  }, []);

  return null;
};

const TextInputAddonRight: FC<TextInputAddonProps> = ({ children }) => {
  const { setRightAddon } = useTextInput();

  useEffect(() => {
    setRightAddon(children);

    return () => {
      setRightAddon(null);
    };
  }, []);

  return null;
};

const TextInputLabel: FC<TextInputLabelProps> = ({ children }) => {
  const { setLabel } = useTextInput();
  const clonedChildren = Children.toArray(children).map(child => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<{ htmlFor?: string }>, {
        htmlFor: child.props.htmlFor || '',
      });
    }

    return child;
  });

  useEffect(() => {
    setLabel(clonedChildren);

    return () => {
      setLabel(null);
    };
  }, []);

  return null;
};

TextInputProvider.TextInputLabel = TextInputLabel;
TextInputProvider.TextInputAddonLeft = TextInputAddonLeft;
TextInputProvider.TextInputAddonRight = TextInputAddonRight;

export default TextInputProvider;
