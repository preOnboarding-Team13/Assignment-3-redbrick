import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/entities/user.schema";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({ usernameField: "userId", passwordField: "userPw" });
	}

	async validate(userId: string, userPw: string): Promise<User> {
		const user = this.authService.validateUser(userId, userPw);
		if (!user) {
			return null;
		}

		return user;
	}
}