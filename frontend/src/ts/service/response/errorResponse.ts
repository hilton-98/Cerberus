import { Response } from './response';

export class ErrorResponse extends Response {
  private static readonly success = false;

  constructor(private readonly message: string) {
    super(ErrorResponse.success);
  }
  
  public static isErrorResponse(response: Response): response is ErrorResponse {
   return !response.isSuccess();
  }

  public getMessage(): string {
    return this.message;
  }
}