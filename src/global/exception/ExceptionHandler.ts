import {
	ArgumentsHost,
	BadRequestException,
	ExceptionFilter,
	NotFoundException,
	UnauthorizedException
} from "@nestjs/common";
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
				.json(ErrorResponse.response(ErrorCode.NotFound));
		} else {
			// 에러 처리가 완료되면 다른 오류로 교체해주세요.
			response
				.status(417)
				.json(ErrorResponse.response(ErrorCode.NotFound));
		}
	}
}
