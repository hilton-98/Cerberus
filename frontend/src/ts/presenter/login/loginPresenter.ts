import { Service } from 'typedi';

import { User } from '@/model/user.interface';
import { ErrorResponse } from '@/ts/service/response/errorResponse';
import { UserService } from '@/ts/service/user/userService';

import { LoginView } from './loginView.interface';

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
      console.log('login success!');
    } else {
      this.view.showError((response as ErrorResponse).getMessage());
    }
  }
}
