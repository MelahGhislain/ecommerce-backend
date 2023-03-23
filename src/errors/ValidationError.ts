import CustomError from './CustomError';
import { ErrorType } from './_utils';

class ValidationError extends CustomError {
  errorCode = 400;
  errorType = ErrorType.ValidationError;

  constructor(private property: string, message: string, status?: number) {
    super(message);
    this.errorCode = status || 400;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message, property: this.property }];
  }
}

export default ValidationError;
