import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "src/global/common/ErrorCode";

export class DuplicatedUserException extends HttpException {
	constructor() {
		super(ErrorCode.DuplicatedUser, HttpStatus.CONFLICT);
	}
}
