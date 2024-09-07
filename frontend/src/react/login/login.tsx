'use client';

import { Button, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import welcomeBackgroundImage from '@/assets/images/welcome-background.jpg';

import styles from './login.module.scss';
import { LoginInputComponent } from './loginInput/loginInput';

const css = {
  container: styles['container'],
  infoGroup: styles['info-group'],
  loginGrid: styles['login-grid'],
  loginGroup: styles['login-group'],
  title: styles['title'],
} as const;

const phrases = {
  passwordPlaceholder: 'Password',
  submitButton: 'Submit',
  title: 'Login',
  usernamePlaceholder: 'Username',
  welcome: 'Welcome to ExpenseHound',
} as const;

export function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log({
      username,
      password,
    });
  };

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
            />
          </Stack>
          <Button onClick={onSubmit}>{phrases.submitButton}</Button>
        </div>
        <div
          className={css.infoGroup}
          style={{
            backgroundImage: `url(${welcomeBackgroundImage.src})`,
          }}
        >
          {phrases.welcome}
        </div>
      </div>
    </div>
  );
}
