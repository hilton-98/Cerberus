'use client';

import { Button, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import welcomeBackgroundImage from '@/assets/images/welcome-background.jpg';
import { Container } from '@/ts/lib/typedi/container';
import { UserService } from '@/ts/server/userService';

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
  signUpButton: 'Sign Up',
  title: 'Login',
  usernamePlaceholder: 'Username',
  welcome: 'Welcome to ExpenseHound',
} as const;

export function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    const userService = Container.get(UserService);
    userService.createUser({
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
          <Button onClick={onSignUp}>{phrases.signUpButton}</Button>
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
