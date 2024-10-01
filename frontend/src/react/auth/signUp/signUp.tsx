'use client';

import { Button, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Container } from '@/ts/lib/typedi/container';
import { LoginPresenter } from '@/ts/presenter/login/loginPresenter';

import { AuthWrapperComponent } from '../common/authWrapper/authWrapper';
import { AuthInputComponent } from '../common/authInput/authInput';

import styles from './signUp.module.scss';
import { RouteType } from '@/ts/presenter/route/route.enum';
import { LinkComponent } from '@/react/core/link/link';

const css = {
  title: styles['title'],
} as const;

const phrases = {
  loginCta: 'Already have an account? ',
  loginCtaLink: 'Log in',
  passwordPlaceholder: 'Password',
  signUpButton: 'Sign Up',
  title: 'Create Account',
  usernamePlaceholder: 'Username',
} as const;

export function SignUpComponent() {
  const signUpPresenter = Container.get(LoginPresenter);

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const clearError = () => {
    setErrorMessage(undefined);
  };

  const onSignUp = () => {
    signUpPresenter.login({
      username,
      password,
    });
  };

  useEffect(() => {
    signUpPresenter.setView({
      clearError: () => clearError(),
      showError: (errorMessage) => setErrorMessage(errorMessage),
    });
  }, [signUpPresenter]);

  const ErrorMessage = () => (errorMessage ? <span>{errorMessage}</span> : <></>);

  return (
    <AuthWrapperComponent>
      <div className={css.title}>{phrases.title}</div>
      <Stack>
        <AuthInputComponent
          onChange={(e) => setUsername(e.target.value)}
          placeholder={phrases.usernamePlaceholder}
        />
        <AuthInputComponent
          onChange={(e) => setPassword(e.target.value)}
          placeholder={phrases.passwordPlaceholder}
          type={'password'}
        />
      </Stack>
      <ErrorMessage />
      <Button onClick={onSignUp}>{phrases.signUpButton}</Button>
      <div>
        <span>{phrases.loginCta}</span>
        <LinkComponent
          routeType={RouteType.Login}
          text={phrases.loginCtaLink}
        />
      </div>
    </AuthWrapperComponent>
  );
}
