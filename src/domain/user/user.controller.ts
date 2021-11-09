import {
	Body,
	Controller,
	Post,
	Request,
	Get,
	UseGuards
} from "@nestjs/common";
import { SuccessCode } from "src/global/common/SuccessCode";
import { SuccessResponse } from "src/global/common/SuccessResponse";
import { AuthService } from "../auth/auth.service";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { LocalAuthGuard } from "../auth/guards/localAuthGuard.guard";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly authService: AuthService
	) {}

	@Post("signup")
	async signUp(@Body() body: CreateUserDto): Promise<SuccessResponse> {
		return SuccessResponse.response(
			SuccessCode.CreateUser,
			await this.userService.create(body)
		);
	}

	@UseGuards(LocalAuthGuard)
	@Post("signin")
	async signIn(@Request() req) {
		return SuccessResponse.response(
			SuccessCode.LoginUser,
			this.authService.makeToken(req.user)
		);
	}

	@UseGuards(JwtGuard)
	@Get("projects")
	async getProjects(@Request() req) {
		const loginUser = req.user;
		return this.userService.getProject(loginUser);
	}
}
