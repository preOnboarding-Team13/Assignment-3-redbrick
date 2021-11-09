import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	Request,
	UseGuards
} from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { CreateProjectDto } from "./dto/createProject.dto";
import { EditProjectDto } from "./dto/edtiProject.dto";
import { ProjectService } from "./project.service";

@Controller("projects")
export class ProjectController {
	constructor(
		private readonly projectService: ProjectService,
		private readonly authService: AuthService
	) {}

	// 프로젝트 생성
	@UseGuards(JwtGuard)
	@Post()
	async creatProject(
		@Request() req,
		@Body() createProjectDto: CreateProjectDto
	) {
		const loginUser = req.user;
		return await this.projectService.createProject(
			loginUser,
			createProjectDto
		);
	}

	// 프로젝트 편집
	@UseGuards(JwtGuard)
	@Patch(":projectId")
	async editProject(
		@Request() req,
		@Param("projectId") projectId: string,
		@Body() editProjectDto: EditProjectDto
	) {
		return await this.projectService.editProject(
			req.user,
			projectId,
			editProjectDto
		);
	}

	// 프로젝트 조회 (편집하기 위해 조회)
	@UseGuards(JwtGuard)
	@Get(":projectId")
	async getProject(@Request() req, @Param("projectId") projectId: string) {
		const loginUser = req.user;
		return this.projectService.getProject(loginUser, projectId);
	}

	// 프로젝트 삭제
	@UseGuards(JwtGuard)
	@Delete(":projectId")
	@HttpCode(204)
	async deleteProject(@Request() req, @Param("projectId") projectId: string) {
		const loginUser = req.user;
		return this.projectService.deleteProject(loginUser, projectId);
	}
}
