import { Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const styles = {
  black: 'black',
  white: 'white',
} as const;

export function LoginInputComponent({ onChange, placeholder }: Props) {
  return (
    <Input
      backgroundColor={styles.white}
      color={styles.black}
      focusBorderColor={styles.black}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
