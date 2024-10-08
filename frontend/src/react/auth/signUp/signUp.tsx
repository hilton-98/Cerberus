'use client';

import { Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { LinkComponent } from '@/react/core/link/link';
import { RedirectManager } from '@/react/utils/redirectManager';
import { Container } from '@/ts/lib/typedi/container';
import { RouteType } from '@/ts/presenter/route/route.enum';
import { SignUpPresenter } from '@/ts/presenter/signUp/signUpPresenter';

import { AuthInputComponent } from '../common/authInput/authInput';
import { AuthWrapperComponent } from '../common/authWrapper/authWrapper';

import styles from './signUp.module.scss';

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
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const redirectManager = useMemo(() => Container.get(RedirectManager), []);
  const signUpPresenter = useMemo(() => Container.get(SignUpPresenter), []);

  const clearError = () => {
    setErrorMessage(undefined);
  };

  const startSession = () => {
    redirectManager.redirectExpenses(router);
  };

  const onSignUp = () => {
    signUpPresenter.signUp({
      username,
      password,
    });
  };

  useEffect(() => {
    signUpPresenter.setView({
      clearError: () => clearError(),
      startSession: () => startSession(),
      showError: (errorMessage) => setErrorMessage(errorMessage),
    });
  });

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
