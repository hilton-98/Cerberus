import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class Server {
  public readonly baseUrl: string = process.env.NEXT_PUBLIC_SERVER_URL ?? '';

  public async get(url: string) {
    const response = await axios.get(url);
    return response.data;
  }
}
