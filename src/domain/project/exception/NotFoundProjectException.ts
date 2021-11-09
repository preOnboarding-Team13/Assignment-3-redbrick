import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "src/global/common/ErrorCode";

export class NotFoundProjectException extends HttpException {
	constructor() {
		super(ErrorCode.NotFoundProject, HttpStatus.NOT_FOUND);
	}
}
