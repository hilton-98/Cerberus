import { Server } from './server';

import { Service } from 'typedi';

@Service()
export class ExpenseService {
  private readonly serviceUrl = `${this.server.baseUrl}/expenses`;

  constructor(private readonly server: Server) {}

  async getExpenses() {
    return this.server.get(`${this.serviceUrl}/expenses`);
  }
}
