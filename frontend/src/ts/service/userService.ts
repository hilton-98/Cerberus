import { Service } from 'typedi';

import { User } from '@/model/user.interface';

import { Server } from './server';

@Service()
export class UserService {
  private readonly serviceUrl = `${this.server.baseUrl}/user`;

  constructor(private readonly server: Server) {}

  async getUsers() {
    const response = await this.server.get(`${this.serviceUrl}/getUsers`);
    return response.data;
  }

  async createUser(user: User) {
    const response = await this.server.post(`${this.serviceUrl}/createUser`, user);
    return response.data;
  }
}
