import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "../auth/auth.service";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";

const mockProjectService = {
	createProject: jest.fn(),
	editProject: jest.fn(),
	getProject: jest.fn(),
	deleteProject: jest.fn()
};

const mockAuthService = {
	makeToken: jest.fn(() => {
		return "this is token";
	})
};

describe("ProjectController", () => {
	let controller: ProjectController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ProjectController],
			providers: [
				{
					provide: ProjectService,
					useValue: mockProjectService
				},
				{
					provide: AuthService,
					useValue: mockAuthService
				}
			]
		}).compile();

		controller = module.get<ProjectController>(ProjectController);
	});

	const project = {
		_id: "618a13102bcf372122c6e184",
		updateDt: new Date(),
		createDt: new Date(),
		isPublished: false,
		projectName: "프로젝트 이름",
		userId: "heejin",
		scenes: {}
	};

	it("should create new project", async () => {
		const user = {
			userId: "team13"
		};
		const createproject = {
			projectName: "프로젝트 이름"
		};

		mockProjectService.createProject.mockReturnValue(project);
		const result = await controller.creatProject(user, createproject);
		console.log(result);

		expect(result).toEqual(project);
	});

	it("should edit project", async () => {
		const user = {
			userId: "team13"
		};
		const projectId = "618a13102bcf372122c6e184";
		const editproject = {
			projectName: "프로젝트 이름",
			updateDt: new Date()
		};

		mockProjectService.editProject.mockReturnValue(project);
		const result = await controller.editProject(
			user,
			projectId,
			editproject
		);
		console.log(result);

		expect(result).toEqual(project);
	});

	it("should get project", async () => {
		const user = {
			userId: "team13"
		};
		const projectId = "618a13102bcf372122c6e184";

		mockProjectService.getProject.mockReturnValue(project);
		const result = await controller.getProject(user, projectId);

		expect(result).toEqual(project);
	});

	it("should delete project", async () => {
		const user = {
			userId: "team13"
		};
		const projectId = "618a13102bcf372122c6e184";

		mockProjectService.deleteProject.mockReturnValue(null);
		const result = await controller.deleteProject(user, projectId);
		console.log(result);

		expect(result).toEqual(null);
	});
});
