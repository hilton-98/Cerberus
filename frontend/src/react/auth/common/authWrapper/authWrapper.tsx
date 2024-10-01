'use client';

import welcomeBackgroundImage from '@/assets/images/welcome-background.jpg';

import styles from './authWrapper.module.scss';

const css = {
  container: styles['container'],
  infoGroup: styles['info-group'],
  authGrid: styles['auth-grid'],
  authGroup: styles['auth-group'],
  title: styles['title'],
} as const;

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
    <div className={css.container}>
      <div className={css.authGrid}>
        <div className={css.authGroup}>{children}</div>
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
