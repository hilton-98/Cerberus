'use client';

import welcomeBackgroundImage from '@/assets/images/welcome-background.jpg';

import styles from './authWrapper.module.scss';

const imageStyles = {
  infoBackground: {
    backgroundImage: `url(${welcomeBackgroundImage.src})`,
  },
} as const;

const phrases = {
  welcome: 'Welcome to ExpenseHound',
} as const;

interface Props {
  children: React.ReactNode;
}

export function AuthWrapperComponent({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.authGrid}>
        <div className={styles.authGroup}>{children}</div>
        <div
          className={styles.infoGroup}
          style={imageStyles.infoBackground}
        >
          {phrases.welcome}
        </div>
      </div>
    </div>
  );
}
