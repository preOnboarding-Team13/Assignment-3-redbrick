import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/entities/user.schema";
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
	constructor(
		@InjectModel("User")
		private userModel: Model<User>,
		private jwtService: JwtService
	) {}

	async validateUser(userId: string, userPw: string): Promise<User> {
        console.log('service: ',userId, userPw);
		const user = await this.userModel.findOne({
			userId: userId
		});
		if (!user || (user && !(await bcrypt.compare(userPw, user.userPw)))) {
			throw new Error();
		}
		return user;
	}

	makeToken(user: User): string {
		const payload = { userId: user.userId };
		return this.jwtService.sign(payload);
	}
}
