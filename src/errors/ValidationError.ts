import CustomError from "./CustomError";
import { ErrorType } from "./_utils";

class ValidationError extends CustomError {
    errorCode = 400
    errorType = ErrorType.ValidationError

    constructor(private property: string, message: string){
        super(message)

        Object.setPrototypeOf(this, ValidationError.prototype)
    }

    serializeErrors() {
        return [{ message: this.message, property: this.property }]
    }
}

export default ValidationError
