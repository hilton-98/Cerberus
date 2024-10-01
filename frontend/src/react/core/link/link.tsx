'use client';

import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Container } from '@/ts/lib/typedi/container';
import { RouteType } from '@/ts/presenter/route/route.enum';
import { RouteManager } from '@/ts/presenter/route/routeManager';

import styles from './link.module.scss';

const css = {
  text: styles['text'],
} as const;

interface Props {
  routeType: RouteType;
  text: string;
}

export function LinkComponent({ routeType, text }: Props) {
  const routeManager = Container.get(RouteManager);

  return (
    <NextLink href={routeManager.getRoute(routeType)}>
      <ChakraLink>
        <span className={css.text}>{text}</span>
      </ChakraLink>
    </NextLink>
  );
}
