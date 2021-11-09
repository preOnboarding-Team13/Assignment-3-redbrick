import { Body, Controller, Post, Req, Request, UseGuards } from "@nestjs/common";
import { SuccessCode } from "src/global/common/SuccessCode";
import { SuccessResponse } from "src/global/common/SuccessResponse";
import { AuthService } from "../auth/auth.service";
import { LocalAuthGuard } from "../auth/guards/localAuthGuard.guard";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly authService: AuthService
	) {}

	@Post("signup")
	async signUp(@Body() body: CreateUserDto): Promise<SuccessResponse> {
		console.log(body);
		return SuccessResponse.response(
			SuccessCode.CreateUser,
			await this.userService.create(body)
		);
	}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	async signIn(@Req() req) {
		return SuccessResponse.response(
			SuccessCode.LoginUser,
			this.authService.makeToken(req.user)
		);
	}
}
