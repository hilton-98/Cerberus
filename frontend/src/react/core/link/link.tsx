'use client';

import NextLink from 'next/link';

import { Container } from '@/ts/lib/typedi/container';
import { RouteType } from '@/ts/presenter/route/route.enum';
import { RouteManager } from '@/ts/presenter/route/routeManager';

import styles from './link.module.scss';

interface Props {
  routeType: RouteType;
  text: string;
}

export function LinkComponent({ routeType, text }: Props) {
  const routeManager = Container.get(RouteManager);

  return (
    <NextLink
      href={routeManager.getRoute(routeType)}
      passHref
    >
      <span className={styles.text}>{text}</span>
    </NextLink>
  );
}
