import { Service } from 'typedi';

import { Server } from './server';

@Service()
export class UserService {
  private readonly serviceUrl = `${this.server.baseUrl}/user`;

  constructor(private readonly server: Server) {}

  async getUsers() {
    return this.server.get(`${this.serviceUrl}/getUsers`);
  }
}
