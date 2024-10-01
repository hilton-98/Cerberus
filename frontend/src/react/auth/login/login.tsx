'use client';

import { Button, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { LinkComponent } from '@/react/core/link/link';
import { Container } from '@/ts/lib/typedi/container';
import { LoginPresenter } from '@/ts/presenter/login/loginPresenter';
import { RouteType } from '@/ts/presenter/route/route.enum';

import { AuthInputComponent } from '../common/authInput/authInput';
import { AuthWrapperComponent } from '../common/authWrapper/authWrapper';

import styles from './login.module.scss';

const css = {
  title: styles['title'],
} as const;

const phrases = {
  passwordPlaceholder: 'Password',
  loginButton: 'Login',
  signUpCta: 'New to ExpenseHound? ',
  signUpCtaLink: 'Sign up now',
  title: 'Login',
  usernamePlaceholder: 'Username',
} as const;

export function LoginComponent() {
  const loginPresenter = Container.get(LoginPresenter);

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const clearError = () => {
    setErrorMessage(undefined);
  };

  const onLogin = () => {
    loginPresenter.login({
      username,
      password,
    });
  };

  useEffect(() => {
    loginPresenter.setView({
      clearError: () => clearError(),
      showError: (errorMessage) => setErrorMessage(errorMessage),
    });
  }, [loginPresenter]);

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
      <Button onClick={onLogin}>{phrases.loginButton}</Button>
      <div>
        <span>{phrases.signUpCta}</span>
        <LinkComponent
          routeType={RouteType.SignUp}
          text={phrases.signUpCtaLink}
        />
      </div>
    </AuthWrapperComponent>
  );
}
