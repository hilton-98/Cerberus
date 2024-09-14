import { Service } from 'typedi';

import { User } from '@/model/user.interface';
import { UserService } from '@/ts/service/userService';

import { LoginView } from './loginView.interface';

@Service()
export class LoginPresenter {
  private readonly passwordLength = 5;
  private readonly usernameLength = 8;

  private readonly phrases = {
    passwordLengthError: `Password must be at least ${this.passwordLength} characters`,
    usernameLengthError: `Username must be at least ${this.usernameLength} characters`,
  } as const;

  private view: LoginView | undefined;

  constructor(private readonly userService: UserService) {}

  private isPasswordLengthOk(password: string): boolean {
    return password.length >= this.passwordLength;
  }

  private isUsernameLengthOk(username: string): boolean {
    return username.length >= this.usernameLength;
  }

  public setView(view: LoginView) {
    this.view = view;
  }

  public async signUp(user: User): Promise<void> {
    if (!this.view) {
      throw new Error('LoginView must be defined');
    } else if (!this.isUsernameLengthOk(user.username)) {
      this.view.showError(this.phrases.usernameLengthError);
      return;
    } else if (!this.isPasswordLengthOk(user.password)) {
      this.view.showError(this.phrases.passwordLengthError);
      return;
    }

    const _response = await this.userService.createUser(user);
  }
}
