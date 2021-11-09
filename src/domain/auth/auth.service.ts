import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/entities/user.schema";
import * as bcrypt from "bcrypt";
import { UnauthorizedUserException } from "../user/exception/UnauthorizedUserException";
@Injectable()
export class AuthService {
	constructor(
		@InjectModel("User")
		private userModel: Model<User>,
		private jwtService: JwtService
	) {}

	async validateUser(userId: string, userPw: string): Promise<User> {
		const user = await this.userModel.findOne({
			userId: userId
		});
		if (!user || (user && !(await bcrypt.compare(userPw, user.userPw)))) {
			throw new UnauthorizedUserException();
		}
		return user;
	}

	makeToken(user: User): string {
		const payload = { userId: user.userId };
		return this.jwtService.sign(payload);
	}
}
