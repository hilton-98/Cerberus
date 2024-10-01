import { Service } from 'typedi';

import { RouteType } from './route.enum';

@Service()
export class RouteManager {
  private readonly routes: Record<RouteType, string> = {
    [RouteType.Expenses]: '/expenses',
    [RouteType.Home]: '/',
    [RouteType.Login]: '/auth/login',
    [RouteType.Profile]: '/profile',
    [RouteType.SignUp]: '/auth/signUp',
  } as const;

  public getRoute(routeType: RouteType) {
    return this.routes[routeType];
  }
}
