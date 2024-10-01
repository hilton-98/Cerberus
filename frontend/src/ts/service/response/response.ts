export class Response {
  constructor(private readonly success: boolean) {}

  public isSuccess(): boolean {
    return this.success;
  }
}
