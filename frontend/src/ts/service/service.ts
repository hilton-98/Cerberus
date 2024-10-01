import { HttpStatusCode } from 'axios';
import { Service as TypeDiService } from 'typedi';

import { Server } from './server';

@TypeDiService()
export abstract class Service {
  constructor(protected readonly server: Server) {}

  protected isOk(status: number): boolean {
    return status === HttpStatusCode.Ok;
  }
}
