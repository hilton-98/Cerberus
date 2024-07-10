'use client';

import { useState } from 'react';
import styles from './login.module.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles['container']}>
      Login
      <label className={styles['input-container']}>
        Username:
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className={styles['input-container']}>
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          let info = {
            username,
            password,
          };
          console.log(info);
        }}
      >
        Submit
      </button>
    </div>
  );
}
