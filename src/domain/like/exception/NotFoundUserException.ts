import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "src/global/common/ErrorCode";

export class NotFoundUserException extends HttpException {
	constructor() {
		super(ErrorCode.NotFoundUser, HttpStatus.NOT_FOUND);
	}
}
