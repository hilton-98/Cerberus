import axios from 'axios';
import { Service } from 'typedi';

import { Request } from './request/request.interface';

@Service()
export class Server {
  public readonly baseUrl: string = process.env.NEXT_PUBLIC_SERVER_URL ?? '';

  public async get(url: string) {
    const response = await axios.get(url);
    return response.data;
  }

  public async post(url: string, request: Request) {
    const response = await axios.post(url, request);
    return response.data;
  }
}
