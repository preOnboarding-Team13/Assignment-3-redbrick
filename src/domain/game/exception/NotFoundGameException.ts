import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "src/global/common/ErrorCode";

export class NotFoundGameException extends HttpException {
	constructor() {
		super(ErrorCode.NotFoundGame, HttpStatus.NOT_FOUND);
	}
}
