import { CommonResponse } from "./CommonResponse";
import { ErrorCode } from "./ErrorCode";

export class ErrorResponse extends CommonResponse {
	constructor(errorCode: ErrorCode) {
		super();
		this.statusCode = errorCode.StatusCode;
		this.message = errorCode.Message;
	}

	public static response(errorCode: ErrorCode) {
		return new ErrorResponse(errorCode);
	}
}
