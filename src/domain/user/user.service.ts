import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/entities/user.schema";
import { CreateUserDto } from "./dto/createUser.dto";
import * as bcrypt from "bcrypt";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class UserService {
	constructor(
		@InjectModel("User")
		private userModel: Model<User>,

		private authService: AuthService
	) {}

	private async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}

	async create(createUser: CreateUserDto) {
		const findUser = await this.userModel.findOne({
			userId: createUser.userId
		});
		if (findUser) throw new Error();

		const user: User = new User();
		user.userId = createUser.userId;
		user.userPw = await this.hashPassword(createUser.userPw);
		user.userBirthday = createUser.userBirthday;
		user.agreement = createUser.aggrement;

		new this.userModel(user).save();
		
		return this.authService.makeToken(user);
	}
}
