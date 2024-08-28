import Link from 'next/link';

import styles from './header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Container } from '@/ts/lib/typedi/container';
import { RouteManager } from '@/ts/route/routeManager';
import { RouteType } from '@/ts/route/routeType';

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
    id: 1,
    label: phrases.loginPageLabel,
    route: routeManager.getRoute(RouteType.Login),
  },
  {
    id: 2,
    label: phrases.expensesLabel,
    route: routeManager.getRoute(RouteType.Expenses),
  },
] as const;

const cssStyles = {
  container: styles['container'],
  link: styles['link'],
  links: styles['links'],
} as const;

export function Header() {
  return (
    <div className={cssStyles.container}>
      <div className={cssStyles.links}>
        {links.map((link) => (
          <Link
            className={cssStyles.link}
            href={link.route}
            key={link.id}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <Link
          className={cssStyles.link}
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
