import styles from './profile.module.scss';

const phrases = {
  placeholderWelcome: 'Welcome to your account page!',
} as const;

export default function Profile() {
  return <div className={styles['container']}>{phrases.placeholderWelcome}</div>;
}
