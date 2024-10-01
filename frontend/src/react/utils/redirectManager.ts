import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Service } from 'typedi';

import { RouteType } from '@/ts/presenter/route/route.enum';
import { RouteManager } from '@/ts/presenter/route/routeManager';

@Service()
export class RedirectManager {
  constructor(private readonly routeManager: RouteManager) {}

  private redirect(router: AppRouterInstance, route: string) {
    router.push(route);
  }

  public redirectExpenses(router: AppRouterInstance) {
    this.redirect(router, this.routeManager.getRoute(RouteType.Expenses));
  }
}
