export class NotFoundError {
    status: number;
    message: any;
    constructor(message: any) {
      this.message = message;
      this.status = 404;
    }
  }
  