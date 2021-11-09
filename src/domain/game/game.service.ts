import { BadRequestException, Injectable } from "@nestjs/common";
import { Game } from "src/entities/game.schema";
import { NotFoundProjectException } from "../project/exception/NotFoundProjectException";
import { CreateGameDto } from "./dto/createGame.dto";
import { ProjectRepository } from "../project/project.repository";
import { SearchQuery } from "./dto/searchQuery.dto";
import { GameRepository } from "./game.repository";

@Injectable()
export class GameService {
	constructor(
        private gameRepository: GameRepository,
        private projectRepository: ProjectRepository
    ) {}

	async publish(loginUser, createGameDto: CreateGameDto) {
		const { projectId, gameName } = createGameDto;
		const project = await this.projectRepository.findById(projectId);

		if (!project) {
			throw new NotFoundProjectException()
		};

		if (project.userId !== loginUser.userId) {
			throw new BadRequestException();
		};

		if (project.isPublished) {
			return await this.gameRepository.update(project.gameId, { project, gameName });
		}else {
			const newGame = await this.gameRepository.create({
				project,
				gameName
			});
			await this.projectRepository.updateOne(project,{isPublished: true, gameId: newGame._id});
			
			return newGame;
		}
	}

	async search(query: SearchQuery): Promise<Game[]> {
		const { userId, gameName } = query;

		if(!userId && !gameName) {
			return await this.gameRepository.findAll();
		}

		if (userId && gameName) {
			return await this.gameRepository.findByUserIdAndGameName(query);
		}

		return userId
			? await this.gameRepository.findByUserId(userId)
			: await this.gameRepository.findByGameName(gameName);
	}
}
