import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class Server {
  public readonly baseUrl: string = 'http://localhost:8080';

  public async get(url: string) {
    const response = await axios.get(url);
    return response.data;
  }
}
