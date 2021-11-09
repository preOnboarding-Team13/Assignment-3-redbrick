import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Mongoose } from "mongoose";
import { Game } from "src/entities/game.schema";
import { Project } from "src/entities/project.schema";
import { User } from "src/entities/user.schema";
import { NotFoundGameException } from "../game/exception/NotFoundGameException";
import { NotFoundUserException } from "../user/exception/NotFoundUserException";

@Injectable()
export class LikeService {
	constructor(
		@InjectModel("Project")
		private readonly projectModel: Model<Project>,

		@InjectModel("User")
		private readonly userModel: Model<User>,

		@InjectModel("Game")
		private readonly gameModel: Model<Game>
	) {}

	async findGame(gameId: string) {
		const findGame = await this.gameModel.findOne({ _id: gameId });

		if (!findGame) {
			throw new NotFoundGameException();
		}

		const view = findGame.view + 1;
		findGame.view = view;

		return await new this.gameModel(findGame).save();
	}

	// 좋아요
	async likeGame(loginUser, gameId: string) {
		const findGame = await this.gameModel.findOne({ _id: gameId });
		if (!findGame) {
			throw new NotFoundGameException();
		}

		const findUser = await this.userModel.findOne({
			userId: loginUser.userId
		});

		if (!findUser) {
			throw new NotFoundUserException();
		}

		if (
			(findGame.like &&
				!findGame.like.hasOwnProperty(`${findUser.userId}`)) ||
			!findGame.like ||
			findGame.like[findUser.userId] === false
		) {
			!findGame.like ? (findGame.like = new Object()) : findGame.like;
			findGame.like[findUser.userId] = true;
			await new this.gameModel(findGame).save();
		}

		return await this.gameModel.findOne({ _id: gameId });
	}

	// 싫어요
	async hateGame(loginUser, gameId: string) {
		const findGame = await this.gameModel.findOne({ _id: gameId });

		if (!findGame) {
			throw new NotFoundGameException();
		}

		const findUser = await this.userModel.findOne({
			userId: loginUser.userId
		});

		if (!findUser) {
			throw new NotFoundUserException();
		}

		if (
			(findGame.like &&
				findGame.like.hasOwnProperty(`${findUser.userId}`)) ||
			!findGame.like
		) {
			!findGame.like ? (findGame.like = new Object()) : findGame.like;
			findGame.like[findUser.userId] = false;
			await new this.gameModel(findGame).save();
		}

		return await this.gameModel.findOne({ _id: gameId });
	}
}
