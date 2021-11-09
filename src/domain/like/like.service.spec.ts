import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { Model } from "mongoose";
import { Game } from "src/entities/game.schema";
import { User } from "src/entities/user.schema";
import { NotFoundGameException } from "../game/exception/NotFoundGameException";
import { NotFoundUserException } from "../user/exception/NotFoundUserException";
import { LikeService } from "./like.service";

const mockUserModel = {
	findOne: jest.fn()
};

const mockGameModel = {
	findOne: jest.fn(),
	updateOne: jest.fn(),
	findByIdAndUpdate: jest.fn()
};

type MockModel<T = any> = Partial<Record<keyof Model<T>, jest.Mock>>;

describe("LikeService", () => {
	let service: LikeService;
	let userModel: MockModel<User>;
	let gameModel: MockModel<Game>;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				LikeService,
				{
					provide: getModelToken("User"),
					useValue: mockUserModel
				},
				{
					provide: getModelToken("Game"),
					useValue: mockGameModel
				}
			]
		}).compile();

		service = module.get<LikeService>(LikeService);
		userModel = module.get<MockModel<User>>(getModelToken("User"));
		gameModel = module.get<MockModel<Game>>(getModelToken("Game"));
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

	describe("like Service findGame 테스트", () => {
		it("like Service findGame 테스트 (성공)", async () => {
			// given
			mockGameModel.findOne.mockResolvedValue(game);
			mockGameModel.findByIdAndUpdate.mockResolvedValue(game_viewUp);

			// when
			const result = await service.findGame(gameId);

			// then
			expect(mockGameModel.findOne).toHaveBeenCalledTimes(1);
			expect(mockGameModel.findByIdAndUpdate).toHaveBeenCalledTimes(1);
			expect(mockGameModel.findOne).toHaveBeenCalledWith({ _id: gameId });
			expect(mockGameModel.findByIdAndUpdate).toHaveBeenCalledWith(
				{
					_id: gameId
				},
				game
			);
			expect(result).toEqual(game_viewUp);
			expect(result.view).toBe(game_viewUp.view);
		});

		it("like Service findGame 테스트 (NotFoundGameException)", async () => {
			// given
			try {
				mockGameModel.findOne.mockResolvedValue(null);
				// when
				const result = await service.findGame(gameId);
			} catch (error) {
				// then
				expect(error).toBeInstanceOf(NotFoundGameException);
			}
		});
	});

	describe("like Service likeGame 테스트", () => {
		it("like Service likeGame 테스트 (성공)", async () => {
			// given

			mockGameModel.findOne.mockResolvedValue(game);
			mockUserModel.findOne.mockResolvedValue(user);
			game_like.view = game.view;
			mockGameModel.updateOne.mockResolvedValue(game_like);

			// when
			const result = await service.likeGame(user, gameId);

			// then
			expect(mockGameModel.findOne).toHaveBeenCalledWith({ _id: gameId });
			expect(mockUserModel.findOne).toHaveBeenCalledWith({
				userId: user.userId
			});
			expect(mockGameModel.updateOne).toHaveBeenCalledWith(
				{
					_id: game._id
				},
				game_like
			);
			expect(result).toEqual(game);
			expect(result.like).toEqual(game_like.like);
		});

		it("like Service likeGame 테스트 (NotFoundGameException)", async () => {
			// given
			try {
				mockGameModel.findOne.mockResolvedValue(null);
				// when
				const result = await service.likeGame(user, gameId);
			} catch (error) {
				// then
				expect(error).toBeInstanceOf(NotFoundGameException);
			}
		});

		it("like Service likeGame 테스트 (NotFoundUserException)", async () => {
			// given
			try {
				mockGameModel.findOne.mockResolvedValue(game);
				mockUserModel.findOne.mockResolvedValue(null);
				// when
				const result = await service.likeGame(user, gameId);
			} catch (error) {
				// then
				expect(error).toBeInstanceOf(NotFoundUserException);
			}
		});
	});

	describe("like Service hateGame 테스트", () => {
		it("like Service hateGame 테스트 (성공)", async () => {
			// given

			mockGameModel.findOne.mockResolvedValue(game_like);
			mockUserModel.findOne.mockResolvedValue(user);
			game_hate.view = game_like.view;
			mockGameModel.updateOne.mockResolvedValue(game_hate);

			// when
			const result = await service.hateGame(user, gameId);

			// then
			expect(mockGameModel.findOne).toHaveBeenCalledWith({
				_id: game_like._id
			});
			expect(mockUserModel.findOne).toHaveBeenCalledWith({
				userId: user.userId
			});
			expect(mockGameModel.updateOne).toHaveBeenCalledWith(
				{
					_id: game_like._id
				},
				game_hate
			);
			expect(result).toEqual(game_hate);
			expect(result.like).toEqual(game_hate.like);
		});

		it("like Service hateGame 테스트 (NotFoundGameException)", async () => {
			// given
			try {
				mockGameModel.findOne.mockResolvedValue(null);
				// when
				const result = await service.hateGame(user, gameId);
			} catch (error) {
				// then
				expect(error).toBeInstanceOf(NotFoundGameException);
			}
		});

		it("like Service hateGame 테스트 (NotFoundUserException)", async () => {
			// given
			try {
				mockGameModel.findOne.mockResolvedValue(game_like);
				mockUserModel.findOne.mockResolvedValue(null);
				// when
				const result = await service.hateGame(user, gameId);
			} catch (error) {
				// then
				expect(error).toBeInstanceOf(NotFoundUserException);
			}
		});
	});
});
