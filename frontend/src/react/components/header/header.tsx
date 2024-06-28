import Link from 'next/link';

import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles['container']}>
      <Link href={'/'}>Expense Hound</Link>
      <Link href={'/expenses'}>Expenses</Link>
    </div>
  );
}
