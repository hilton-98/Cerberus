import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { Container } from '@/ts/lib/typedi/container';
import { RouteManager } from '@/ts/presenter/route/routeManager';
import { RouteType } from '@/ts/presenter/route/routeType';

import styles from './header.module.scss';

const routeManager = Container.get(RouteManager);

interface LinkInfo {
  id: number;
  label: string;
  route: string;
}

const css = {
  container: styles['container'],
  link: styles['link'],
  links: styles['links'],
} as const;

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

export function Header() {
  return (
    <div className={css.container}>
      <div className={css.links}>
        {links.map((link) => (
          <Link
            className={css.link}
            href={link.route}
            key={link.id}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <Link
          className={css.link}
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
