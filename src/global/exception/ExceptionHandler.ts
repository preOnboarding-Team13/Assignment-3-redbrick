import {
	ArgumentsHost,
	BadRequestException,
	ExceptionFilter,
	NotFoundException,
	UnauthorizedException
} from "@nestjs/common";
import { NotFoundGameException } from "src/domain/game/exception/NotFoundGameException";
import { NotFoundProjectException } from "src/domain/project/exception/NotFoundProjectException";
import { DuplicatedUserException } from "src/domain/user/exception/DuplicatedUserException";
import { NotFoundUserException } from "src/domain/user/exception/NotFoundUserException";
import { UnauthorizedUserException } from "src/domain/user/exception/UnauthorizedUserException";
import { ErrorCode } from "../common/ErrorCode";
import { ErrorResponse } from "../common/ErrorResponse";

export class ExceptionHandler implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();

		if (exception instanceof BadRequestException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.BadRequest));
		} else if (exception instanceof NotFoundException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.NotFound));
		} else if (exception instanceof UnauthorizedException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.UnAuth));
		} else if (exception instanceof NotFoundGameException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.NotFoundGame));
		} else if (exception instanceof NotFoundUserException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.NotFoundUser));
		} else if (exception instanceof NotFoundProjectException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.NotFoundProject));
		} else if (exception instanceof UnauthorizedUserException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.UnauthorizedUser));
		} else if (exception instanceof DuplicatedUserException) {
			const status = exception.getStatus();
			response
				.status(status)
				.json(ErrorResponse.response(ErrorCode.DuplicatedUser));
		} else {
			// 에러 처리가 완료되면 다른 오류로 교체해주세요.
			response
				.status(417)
				.json(ErrorResponse.response(ErrorCode.NotFound));
		}
	}
}
