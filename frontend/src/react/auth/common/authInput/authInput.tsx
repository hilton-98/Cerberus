import { Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

const styles = {
  black: 'black',
  white: 'white',
} as const;

const maxLength = 12; // characters

export function AuthInputComponent({ onChange, placeholder, type = 'text' }: Props) {
  return (
    <Input
      backgroundColor={styles.white}
      color={styles.black}
      focusBorderColor={styles.black}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}
