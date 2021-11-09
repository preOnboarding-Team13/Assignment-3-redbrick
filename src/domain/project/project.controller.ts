import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { CreateProjectDto } from "./dto/createProject.dto";
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
}
