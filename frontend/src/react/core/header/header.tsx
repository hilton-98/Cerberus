import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { Container } from '@/ts/lib/typedi/container';
import { RouteType } from '@/ts/presenter/route/route.enum';
import { RouteManager } from '@/ts/presenter/route/routeManager';

import styles from './header.module.scss';

const routeManager = Container.get(RouteManager);

interface LinkInfo {
  id: number;
  label: string;
  route: string;
}

const phrases = {
  homePageLabel: 'Expense Hound',
  loginPageLabel: 'Login',
  expensesLabel: 'Expenses',
} as const;

const links: LinkInfo[] = [
  {
    id: 0,
    label: phrases.homePageLabel,
    route: routeManager.getRoute(RouteType.Home),
  },
  {
    id: 2,
    label: phrases.expensesLabel,
    route: routeManager.getRoute(RouteType.Expenses),
  },
  {
    id: 1,
    label: phrases.loginPageLabel,
    route: routeManager.getRoute(RouteType.Login),
  },
] as const;

export function HeaderComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            className={styles.link}
            href={link.route}
            key={link.id}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <Link
          className={styles.link}
          href={routeManager.getRoute(RouteType.Profile)}
        >
          <FontAwesomeIcon
            icon={faUser}
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
}
