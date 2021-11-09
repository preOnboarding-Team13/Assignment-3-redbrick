import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/createUser.dto";
import * as bcrypt from "bcrypt";
import { AuthService } from "../auth/auth.service";
import { Project } from "src/entities/project.schema";
import { User } from "src/entities/user.schema";
import { DuplicatedUserException } from "./exception/DuplicatedUserException";
import { UserRepository } from "./user.repository";
import { ProjectRepository } from "../project/project.repository";

@Injectable()
export class UserService {
	constructor(
		@InjectModel("User")
		private userModel: Model<User>,

		@InjectModel("Project")
		private projectModel: Model<Project>,

		private authService: AuthService,
		private userRepository: UserRepository,
		private projectRepository: ProjectRepository
	) {}

	private async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}

	async create(createUser: CreateUserDto) {
		const { userId, userPw, userBirthday, agreement } = createUser;
		const findUser = await this.userRepository.findOne(userId);

		if (findUser) {
			throw new DuplicatedUserException();
		}

		const user: User = new User();
		user.userId = userId;
		user.userPw = await this.hashPassword(userPw);
		user.userBirthday = userBirthday;
		user.agreement = agreement;
		await this.userRepository.create(user);

		return this.authService.makeToken(user);
	}

	async getProject(loginUser: LoginUser) {
		return await this.projectRepository.find({
			userId: loginUser.userId
		});
	}
}
