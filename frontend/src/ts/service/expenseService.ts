import { Service } from 'typedi';

import { Server } from './server';

@Service()
export class ExpenseService {
  private readonly serviceUrl = `${this.server.baseUrl}/expenses`;

  constructor(private readonly server: Server) {}

  async getExpenses() {
    const response = await this.server.get(`${this.serviceUrl}/expenses`);
    return response.data;
  }
}
