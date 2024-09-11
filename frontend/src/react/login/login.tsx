'use client';

import { Button, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import welcomeBackgroundImage from '@/assets/images/welcome-background.jpg';
import { Container } from '@/ts/lib/typedi/container';
import { LoginPresenter } from '@/ts/presenter/login/loginPresenter';

import styles from './login.module.scss';
import { LoginInputComponent } from './loginInput/loginInput';

const css = {
  container: styles['container'],
  infoGroup: styles['info-group'],
  loginGrid: styles['login-grid'],
  loginGroup: styles['login-group'],
  title: styles['title'],
} as const;

const imageStyles = {
  infoBackground: {
    backgroundImage: `url(${welcomeBackgroundImage.src})`,
  },
} as const;

const phrases = {
  passwordPlaceholder: 'Password',
  signUpButton: 'Sign Up',
  title: 'Login',
  usernamePlaceholder: 'Username',
  welcome: 'Welcome to ExpenseHound',
} as const;

export function LoginComponent() {
  const loginPresenter = Container.get(LoginPresenter);

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const clearError = () => {
    setErrorMessage(undefined);
  };

  const onSignUp = () => {
    loginPresenter.signUp({
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
    <div className={css.container}>
      <div className={css.loginGrid}>
        <div className={css.loginGroup}>
          <div className={css.title}>{phrases.title}</div>
          <Stack>
            <LoginInputComponent
              onChange={(e) => setUsername(e.target.value)}
              placeholder={phrases.usernamePlaceholder}
            />
            <LoginInputComponent
              onChange={(e) => setPassword(e.target.value)}
              placeholder={phrases.passwordPlaceholder}
              type={'password'}
            />
          </Stack>
          <ErrorMessage />
          <Button onClick={onSignUp}>{phrases.signUpButton}</Button>
        </div>
        <div
          className={css.infoGroup}
          style={imageStyles.infoBackground}
        >
          {phrases.welcome}
        </div>
      </div>
    </div>
  );
}
