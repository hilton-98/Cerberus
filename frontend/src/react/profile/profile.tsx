import styles from './profile.module.scss';

const css = {
   container: styles['container'],
} as const;

const phrases = {
  placeholderWelcome: 'Welcome to your account page!',
} as const;

export function ProfileComponent() {
  return <div className={css.container}>{phrases.placeholderWelcome}</div>;
}
