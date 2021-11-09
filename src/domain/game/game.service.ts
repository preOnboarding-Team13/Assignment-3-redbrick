import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Game } from "src/entities/game.schema";
import { Project } from "src/entities/project.schema";
import { NotFoundProjectException } from "../project/exception/NotFoundProjectException";
import { CreateGameDto } from "./dto/createGame.dto";
import { SearchQuery } from "./dto/searchQuery.dto";
import { GameRepository } from "./game.repository";

@Injectable()
export class GameService {
	constructor(
		private gameRepository: GameRepository,

		@InjectModel("Game")
		private readonly gameModel: Model<Game>,

		@InjectModel("Project")
		private readonly projectModel: Model<Project>
	) {}

	async publish(loginUser, createGameDto: CreateGameDto) {
		const { projectId, gameName } = createGameDto;
		const project = await this.projectModel.findById(projectId);
		if (!project) throw new NotFoundProjectException();
		if (project.userId != loginUser.userId) throw new BadRequestException();
		if (project.isPublished)
			return this.gameModel.findByIdAndUpdate(
				project.gameId,
				{
					project,
					gameName
				},
				{ returnOriginal: false }
			);
		else {
			const newGame = await this.gameRepository.create({
				project,
				gameName
			});
			project.isPublished = true;
			project.gameId = newGame._id;
			project.save();
			return newGame;
		}
	}

	search(query: SearchQuery) {
		const { userId, gameName } = query;
		if (userId && gameName) {
			return this.gameRepository.findByUserIdAndGameName(query);
		}

		return userId
			? this.gameRepository.findByUserId(userId)
			: this.gameRepository.findByGameName(gameName);
	}
}
