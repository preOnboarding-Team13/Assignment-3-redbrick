import { BadRequestException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { NotFoundProjectException } from "../project/exception/NotFoundProjectException";
import { ProjectRepository } from "../project/project.repository";
import { GameRepository } from "./game.repository";
import { GameService } from "./game.service";

const mockGameRepository = {
	create: jest.fn(),
	update: jest.fn(),
	findByUserId: jest.fn(),
	findByGameName: jest.fn(),
	findByUserIdAndGameName: jest.fn()
};

const mockProjectRepository = {
	findById: jest.fn(),
	updateOne: jest.fn()
};

describe("GameService", () => {
	let service: GameService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				GameService,
				{
					provide: GameRepository,
					useValue: mockGameRepository
				},
				{
					provide: ProjectRepository,
					useValue: mockProjectRepository
				}
			]
		}).compile();

		service = module.get<GameService>(GameService);
	});

	const project = {
		_id: "618a557ff66d3bd08128850f",
		updateDt: "2021-11-09T10:47:48.889+00:00",
		createDt: "2021-11-09T10:47:48.889+00:00",
		isPublished: false,
		projectName: "testProject",
		userId: "bada",
		scenes: [
			{
				updateDt: "2021-11-09T10:47:48.888+00:00",
				createDt: "2021-11-09T10:47:48.888+00:00",
				sprites: [],
				sceneName: "scene1",
				_id: "618a557ff66d3bd081288510"
			}
		]
	};

	const project_published = {
		_id: "618a557ff66d3bd08128850f",
		updateDt: "2021-11-09T10:47:48.889+00:00",
		createDt: "2021-11-09T10:47:48.889+00:00",
		isPublished: true,
		projectName: "testProject",
		userId: "bada",
		scenes: [
			{
				updateDt: "2021-11-09T10:47:48.888+00:00",
				createDt: "2021-11-09T10:47:48.888+00:00",
				sprites: [],
				sceneName: "scene1",
				_id: "618a557ff66d3bd081288510"
			}
		],
		gameId: "618a5b7af00c283115e37c4a"
	};
	const game = {
		_id: "618a5b7af00c283115e37c4a",
		updateDt: "2021-11-09T12:37:21.940+00:00",
		createDt: "2021-11-09T11:26:42.038+00:00",
		view: 0,
		project: {
			_id: "618a557ff66d3bd08128850f",
			updateDt: "2021-11-09T10:47:48.889+00:00",
			createDt: "2021-11-09T10:47:48.889+00:00",
			isPublished: false,
			projectName: "testProject",
			userId: "bada",
			scenes: [
				{
					updateDt: "2021-11-09T10:47:48.888+00:00",
					createDt: "2021-11-09T10:47:48.888+00:00",
					sprites: [],
					sceneName: "scene1",
					_id: "618a557ff66d3bd081288510"
				}
			]
		},
		gameName: "testGame"
	};
	const game_re_publish = {
		_id: "618a5b7af00c283115e37c4a",
		updateDt: "2021-11-09T12:37:21.940+00:00",
		createDt: "2021-11-09T11:26:42.038+00:00",
		view: 0,
		project: {
			_id: "618a557ff66d3bd08128850f",
			updateDt: "2021-11-09T10:47:48.889+00:00",
			createDt: "2021-11-09T10:47:48.889+00:00",
			isPublished: true,
			projectName: "testProject",
			userId: "bada",
			scenes: [
				{
					updateDt: "2021-11-09T10:47:48.888+00:00",
					createDt: "2021-11-09T10:47:48.888+00:00",
					sprites: [],
					sceneName: "scene1",
					_id: "618a557ff66d3bd081288510"
				}
			],
			gameId: "618a5b7af00c283115e37c4a"
		},
		gameName: "testGame"
	};

	const loginUser = { userId: "bada" };

	const createGameDto = {
		projectId: "618a557ff66d3bd08128850f",
		gameName: "testGame"
	};
	const projectId = "618a557ff66d3bd08128850f";
	const gameName = "testGame";

	describe("game service publish 테스트", () => {
		it("game service 최초 publish 테스트 (성공)", async () => {
			// given
			mockProjectRepository.findById.mockResolvedValue(project);
			mockGameRepository.create.mockResolvedValue(game);
			mockProjectRepository.updateOne.mockResolvedValue(
				project_published
			);

			// when
			const newGame = await service.publish(loginUser, createGameDto);

			// then
			expect(mockProjectRepository.findById).toHaveBeenCalledWith(
				projectId
			);
			expect(mockGameRepository.create).toHaveBeenCalledWith({
				project,
				gameName
			});
			expect(mockProjectRepository.updateOne).toHaveBeenCalledWith(
				project,
				{
					isPublished: true,
					gameId: game._id
				}
			);
			expect(newGame).toEqual(game);
		});
		it("game service 재 publish 테스트 (성공)", async () => {
			// given
			mockProjectRepository.findById.mockResolvedValue(project_published);
			mockGameRepository.update.mockResolvedValue(game_re_publish);
			// when
			const newGame = await service.publish(loginUser, createGameDto);
			// then
			expect(mockProjectRepository.findById).toHaveBeenCalledWith(
				projectId
			);
			expect(mockGameRepository.update).toHaveBeenCalledWith(
				project_published.gameId,
				{
					project: project_published,
					gameName
				}
			);
			expect(newGame).toEqual(game_re_publish);
		});
		it("game service publish 테스트 (NotFoundProjectException)", async () => {
			// given
			try {
				mockProjectRepository.findById.mockResolvedValue(null);
				// when
				const result = await service.publish(loginUser, createGameDto);
			} catch (error) {
				// then
				expect(error).toBeInstanceOf(NotFoundProjectException);
			}
		});
		it("game service publish 테스트 (BadRequestException)", async () => {
			// given
			try {
				mockProjectRepository.findById.mockResolvedValue(project);
				// when
				const result = await service.publish(
					{ userId: null },
					createGameDto
				);
			} catch (error) {
				// then
				expect(error).toBeInstanceOf(BadRequestException);
			}
		});
	});
	describe("game service search 테스트", () => {
		it("game service search 테스트 / gameName (성공)", async () => {
			// given
			mockGameRepository.findByUserIdAndGameName.mockResolvedValue("a");
			mockGameRepository.findByGameName.mockResolvedValue("b");
			mockGameRepository.findByUserId.mockResolvedValue("c");

			// when
			const result = service.search({gameName: "testName"});
			// then
			expect(result).toEqual("b")
		});
		it("game service search 테스트 / userId (성공)", async () => {

		});
		it("game service search 테스트 / gameName && userId (성공)", async () => {

		});
	})
});
