import { Service } from 'typedi';

import { User } from '@/model/user.interface';
import { UserService } from '@/ts/service/user/userService';

import { LoginView } from './loginView.interface';
import { ErrorResponse } from '@/ts/service/response/errorResponse';

@Service()
export class LoginPresenter {
  private view: LoginView | undefined;

  constructor(private readonly userService: UserService) {}

  public setView(view: LoginView) {
    this.view = view;
  }

  public async login(user: User): Promise<void> {
    if (!this.view) {
      throw new Error('LoginView must be defined');
    }

    const response = await this.userService.validateUser(user);
    if (response.isSuccess()) {
      // login
    } else {
      this.view.showError((response as ErrorResponse).getMessage());
    }
  }
}
