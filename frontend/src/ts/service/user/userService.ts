import { Service as TypediService } from 'typedi';

import { User } from '@/model/user.interface';

import { ErrorResponse } from '../response/errorResponse';
import { Response } from '../response/response';
import { SuccessResponse } from '../response/successResponse';
import { Service } from '../service';

@TypediService()
export class UserService extends Service {
  private readonly serviceUrl = `${this.server.baseUrl}/user`;

  private readonly errorMessages = {
    createUser: 'Failed to create user',
    validateUser: 'Failed to validate user',
  } as const;

  async createUser(user: User): Promise<Response> {
    const response = await this.server.post(`${this.serviceUrl}/createUser`, user);
    if (this.isOk(response.status)) {
      return new SuccessResponse();
    } else {
      return new ErrorResponse(this.errorMessages.createUser);
    }
  }

  async getUsers() {
    const response = await this.server.get(`${this.serviceUrl}/getUsers`);
    return response.data;
  }

  async validateUser(user: User): Promise<Response> {
    const response = await this.server.post(`${this.serviceUrl}/validateUser`, user);
    if (this.isOk(response.status)) {
      return new SuccessResponse();
    } else {
      return new ErrorResponse(this.errorMessages.validateUser);
    }
  }
}
