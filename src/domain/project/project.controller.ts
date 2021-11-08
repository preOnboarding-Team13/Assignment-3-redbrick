import { Body, Controller, Post } from "@nestjs/common";
import { CreateProjectDto } from "./dto/createProject.dto";
import { ProjectService } from "./project.service";

@Controller("project")
export class ProjectController {
	constructor(private readonly projectService: ProjectService) {}

	// 프로젝트 생성
	@Post()
	async creatProject(@Body() createProjectDto: CreateProjectDto) {
		const loginUser = { userId: "test123" };
		return await this.projectService.createProject(
			loginUser,
			createProjectDto
		);
	}
}
