import { Test, TestingModule } from "@nestjs/testing";
import { LikeController } from "./like.controller";
import { LikeService } from "./like.service";

const mockService = {
	findGame: jest.fn(),
	likeGame: jest.fn(),
	hateGame: jest.fn()
};

describe("LikeController", () => {
	let controller: LikeController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [LikeController],
			providers: [
				{
					provide: LikeService,
					useValue: mockService
				}
			]
		}).compile();

		controller = module.get<LikeController>(LikeController);
	});

	const game = {
		_id: "618a0b27659e61d629686ae7",
		updateDt: "2021-11-09T05:43:35.836Z",
		createDt: "2021-11-09T05:43:35.836Z",
		view: 0,
		description: "testGame",
		gameName: "testName",
		project: {},
		like: {}
	};

	const game_like = {
		_id: "618a0b27659e61d629686ae7",
		updateDt: "2021-11-09T05:43:35.836Z",
		createDt: "2021-11-09T05:43:35.836Z",
		view: 0,
		description: "testGame",
		gameName: "testName",
		project: {},
		like: { test123: true }
	};

	const game_hate = {
		_id: "618a0b27659e61d629686ae7",
		updateDt: "2021-11-09T05:43:35.836Z",
		createDt: "2021-11-09T05:43:35.836Z",
		view: 0,
		description: "testGame",
		gameName: "testName",
		project: {},
		like: { test123: false }
	};

	const game_viewUp = {
		_id: "618a0b27659e61d629686ae7",
		updateDt: "2021-11-09T05:43:35.836Z",
		createDt: "2021-11-09T05:43:35.836Z",
		view: 1,
		description: "testGame",
		gameName: "testName",
		project: {},
		like: {}
	};

	const user = {
		userId: "test123",
		userPw: "testPw"
	};

	const gameId = "618a0b27659e61d629686ae7";

	describe("like controller findGame 테스트", () => {
		it("like controller findGame 테스트 (성공)", async () => {
			// given
			game.view = game.view + 1;
			mockService.findGame.mockResolvedValue(game_viewUp);

			// when
			const result = await controller.findGame(gameId);

			// then
			expect(mockService.findGame).toHaveBeenCalledTimes(1);
			expect(mockService.findGame).toHaveBeenCalledWith(gameId);
			expect(result).toEqual(game);
			expect(result.view).toEqual(game_viewUp.view);
		});
	});

	describe("like controller likeGame 테스트", () => {
		it("like controller likeGame 테스트 (성공)", async () => {
			// given
			mockService.likeGame.mockResolvedValue(game_like);

			// when
			const result = await controller.likeGame(user, gameId);

			// then
			expect(mockService.likeGame).toHaveBeenCalledTimes(1);
			expect(result).toEqual(game_like);
			expect(result.like).toBe(game_like.like);
		});
	});

	describe("like controller hateGame 테스트", () => {
		it("like controller hateGame 테스트 (성공)", async () => {
			// given
			game.like["test123"] = false;
			mockService.hateGame.mockResolvedValue(game_hate);

			// when
			const result = await controller.hateGame(user, gameId);

			// then
			expect(mockService.hateGame).toHaveBeenCalledTimes(1);
			expect(result.like).toEqual(game_hate.like);
		});
	});
});
