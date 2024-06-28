import { Service } from 'typedi';
import { RouteType } from './routeType';

@Service()
export class RouteManager {
  private readonly routes: Record<RouteType, string> = {
    [RouteType.Home]: '/',
    [RouteType.Expenses]: '/expenses',
    [RouteType.Profile]: '/profile',
  } as const;

  public getRoute(routeType: RouteType) {
    return this.routes[routeType];
  }
}
