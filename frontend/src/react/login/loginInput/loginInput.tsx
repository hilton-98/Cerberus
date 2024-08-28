import { Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface Props {
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   placeholder: string;
}

export function LoginInputComponent({
   onChange, 
   placeholder,
}: Props) {

  return (
   <Input
      backgroundColor={'white'}
      color={'black'}
      focusBorderColor={'black'}
      onChange={onChange}
      placeholder={placeholder} 
   />
  );
}
