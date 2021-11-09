import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Project } from "src/entities/project.schema";
import { UserRepository } from "../user/user.repository";
import { CreateProjectDto } from "./dto/createProject.dto";
import { EditProjectDto } from "./dto/edtiProject.dto";
import { NotFoundProjectException } from "./exception/NotFoundProjectException";
import { ProjectRepository } from "./project.repository";

@Injectable()
export class ProjectService {
	constructor(
		private userRepository: UserRepository,
		private projectRepository: ProjectRepository
	) {}

	// 프로젝트 생성
	async createProject(loginUser, createProjectDto: CreateProjectDto): Promise<Project> {
		if (!loginUser?.userId) {
			throw new UnauthorizedException();
		}

		const findUser = await this.userRepository.findOne(loginUser.userId);

		return this.projectRepository.create({
			projectName: createProjectDto.projectName,
			userId: findUser.userId
		});
	}

	// 프로젝트 편집
	async editProject(
		loginUser,
		projectId: string,
		editProjectDto: EditProjectDto
	): Promise<Project> {
		const project = await this.projectRepository.findById(projectId);

		if (!project) {
			throw new NotFoundProjectException();
		}
		if (project.userId != loginUser.userId) {
			throw new BadRequestException();
		}
		
		return this.projectRepository.updateOne(project, { projectName: editProjectDto.projectName, updateDt: Date.now() })
	}

	// 프로젝트 조회
	async getProject(loginUser, projectId): Promise<Project> {
		const project = await this.projectRepository.findById(projectId);

		if (!project) {
			throw new NotFoundProjectException();
		}
		if (project.userId !== loginUser.userId){
			throw new BadRequestException();
		}
		return project;
	}

	async deleteProject(loginUser, projectId) {
		const project = await this.projectRepository.findById(projectId);
		if (!project) {
			throw new NotFoundProjectException();
		}
		if (project.userId !== loginUser.userId) {
			throw new BadRequestException(); // 삭제 권한이 없다.
		}
		return this.projectRepository.delete(project);
	}
}
