import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project } from "src/entities/project.schema";
import { User } from "src/entities/user.schema";
import { CreateProjectDto } from "./dto/createProject.dto";

@Injectable()
export class ProjectService {
	constructor(
		@InjectModel("User")
		private readonly userModel: Model<User>,

		@InjectModel("Project")
		private readonly projectModel: Model<Project>
	) {}
	// 프로젝트 생성
	async createProject(loginUser, createProjectDto: CreateProjectDto) {
		const findUser = await this.userModel.findOne({
			userId: loginUser.userId
		});
		console.log("wwwwww");
		const project: Project = new Project();
		project.projectName = createProjectDto.projectName;
		project.userId = findUser.userId;

		return new this.projectModel(project).save();
	}
}
