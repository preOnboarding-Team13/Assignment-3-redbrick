import { CommonResponse } from "./CommonResponse";
import { SuccessCode } from "./SuccessCode";

export class SuccessResponse extends CommonResponse {
	private data: any;
	constructor(successCode: SuccessCode, data?: any) {
		super();
		this.statusCode = successCode.StatusCode;
		this.message = successCode.Message;
		this.data = data;
	}

	public static response(successCode: SuccessCode, data?: any) {
		return new SuccessResponse(successCode, data);
	}
}
