import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/createUser.dto";
import * as bcrypt from "bcrypt";
import { AuthService } from "../auth/auth.service";
import { Project } from "src/entities/project.schema";
import { User } from "src/entities/user.schema";
import { DuplicatedUserException } from "./exception/DuplicatedUserException";

@Injectable()
export class UserService {
	constructor(
		@InjectModel("User")
		private userModel: Model<User>,

		@InjectModel("Project")
		private projectModel: Model<Project>,

		private authService: AuthService
	) {}

	private async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}

	async create(createUser: CreateUserDto) {
		const findUser = await this.userModel.findOne({
			userId: createUser.userId
		});
		if (findUser) throw new DuplicatedUserException();

		const user: User = new User();
		user.userId = createUser.userId;
		user.userPw = await this.hashPassword(createUser.userPw);
		user.userBirthday = createUser.userBirthday;
		user.agreement = createUser.agreement;

		new this.userModel(user).save();

		return this.authService.makeToken(user);
	}

	async getProject(loginUser) {
		const projects = await this.projectModel
			.find({ userId: loginUser.userId })
			.select("projectName updateDt")
			.exec();
		return projects;
	}
}
