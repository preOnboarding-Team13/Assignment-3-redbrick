import { Test, TestingModule } from "@nestjs/testing";
import { UserRepository } from "../user/user.repository";
import { ProjectRepository } from "./project.repository";
import { ProjectService } from "./project.service";

const mockProjectRepository = {
	create: jest.fn(),
	findUser: jest.fn(),
	findOne: jest.fn(),
	findById: jest.fn(),
	delete: jest.fn()
};

describe("ProjectService", () => {
	let service: ProjectService;

	const project = {
		_id: "618a13102bcf372122c6e184",
		updateDt: new Date(),
		createDt: new Date(),
		isPublished: false,
		projectName: "프로젝트 이름",
		userId: "heejin",
		scenes: {}
	};

	const editproject = {
		projectName: "프로젝트 이름 수정",
		updateDt: new Date()
	};

	const createproject = {
		projectName: "프로젝트 이름",
		userId: "heejin"
	};

	const user = {
		userId: "heejin",
		userName: "heejin"
	};

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				ProjectService,
				{
					provide: UserRepository,
					useValue: mockProjectRepository
				},
				{
					provide: ProjectRepository,
					useValue: mockProjectRepository
				}
			]
		}).compile();

		service = module.get<ProjectService>(ProjectService);
	});

	it("should create new project", async () => {
		// given :mocking 값(test 설정 값)
		mockProjectRepository.create.mockResolvedValue(createproject);
		mockProjectRepository.findOne.mockResolvedValue(user);

		// when :test 주체
		const result = await service.createProject(user, createproject);

		// then :test 결과
		expect(mockProjectRepository.create).toHaveBeenCalledTimes(1);
		expect(mockProjectRepository.findOne).toHaveBeenCalledTimes(1);

		expect(mockProjectRepository.create).toHaveBeenCalledWith(
			createproject
		);
		expect(mockProjectRepository.create).toHaveReturned();

		expect(result).toEqual(createproject);
	});

	it("should edit project", async () => {
		// given
		mockProjectRepository.create.mockResolvedValue(editproject);
		mockProjectRepository.findOne.mockResolvedValue(project);

		// when :test 주체
		const result = await service.editProject(
			user,
			project._id,
			editproject
		);

		// then :test 결과
		expect(mockProjectRepository.create).toHaveBeenCalledTimes(1);
		expect(mockProjectRepository.findOne).toHaveBeenCalledTimes(1);
		expect(mockProjectRepository.create).toHaveBeenCalledWith(project);
		expect(mockProjectRepository.create).toHaveReturned();
		expect(result).toEqual(editproject);
	});

	it("should get project", async () => {
		// given
		mockProjectRepository.findById.mockResolvedValue(project);

		// when :test 주체
		const result = await service.getProject(user, project._id);

		// then :test 결과
		expect(mockProjectRepository.findById).toHaveBeenCalledTimes(1);
		expect(mockProjectRepository.findById).toHaveBeenCalledWith(
			project._id
		);
		expect(mockProjectRepository.findById).toHaveReturned();
		expect(result).toEqual(project);
	});

	it("should delete project", async () => {
		// given
		mockProjectRepository.findById.mockResolvedValue(project);
		mockProjectRepository.delete.mockResolvedValue(null);

		// when :test 주체
		const result = await service.deleteProject(user, project._id);
		console.log(result);

		// then :test 결과
		expect(mockProjectRepository.findById).toHaveBeenCalledTimes(1);
		expect(mockProjectRepository.delete).toHaveBeenCalledTimes(1);
		expect(mockProjectRepository.findById).toHaveBeenCalledWith(
			project._id
		);
		expect(mockProjectRepository.findById).toHaveReturned();
		expect(mockProjectRepository.delete).toHaveReturned();
		expect(result).toEqual(null);
	});
});
