import axios from 'axios';
import { Service } from 'typedi';

import { Request } from './request/request.interface';

@Service()
export class Server {
  public readonly baseUrl: string = process.env.NEXT_PUBLIC_SERVER_URL ?? '';

  public async get(url: string) {
    return await axios.get(url);
  }

  public async post(url: string, request: Request) {
    return await axios.post(url, request);
  }
}
