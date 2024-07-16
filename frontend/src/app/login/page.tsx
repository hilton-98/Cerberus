'use client';

import { useState } from 'react';
import styles from './login.module.scss';

const cssStyles = {
  container: styles['container'],
  inputContainer: styles['input-container'],
};

const phrases = {
  passwordLabel: 'Password:',
  submitButton: 'Submit',
  title: 'Login',
  usernameLabel: 'Username:',
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log({
      username,
      password,
    });
  }

  return (
    <div className={cssStyles.container}>
      {phrases.title}
      <label className={cssStyles.inputContainer}>
        {phrases.usernameLabel}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className={cssStyles.inputContainer}>
        {phrases.passwordLabel}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={onSubmit} >
        {phrases.submitButton}
      </button>
    </div>
  );
}
