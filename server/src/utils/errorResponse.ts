interface ErrorResponseProps {
  statusCode: number;
  message: string;
}

class ErrorResponse extends Error {
  isOperational: boolean;

  statusCode: number;

  stacks?: string;

  constructor({ message, statusCode }: ErrorResponseProps) {
    super(message);
    this.statusCode = statusCode;
    // Low한 Error 객체가 Error Handler로 넘어가면 500 Server Error 발생
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);

    this.stacks = this.stack;
  }
}

export default ErrorResponse;
