import { Service } from 'typedi';

import { User } from '../model/user.interface';

import { Server } from './server';

@Service()
export class UserService {
  private readonly serviceUrl = `${this.server.baseUrl}/user`;

  constructor(private readonly server: Server) {}

  async getUsers() {
    return this.server.get(`${this.serviceUrl}/getUsers`);
  }

  async createUser(user: User) {
    return this.server.post(`${this.serviceUrl}/createUser`, user);
  }
}
