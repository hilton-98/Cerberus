import { Response } from './response';

export class SuccessResponse extends Response {
  private static readonly success = true;

  constructor() {
    super(SuccessResponse.success);
  }

  public static isSuccessResponse(response: Response): response is SuccessResponse {
   return response.isSuccess();
  }
}
