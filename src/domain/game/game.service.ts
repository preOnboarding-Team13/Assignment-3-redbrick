import { Injectable } from '@nestjs/common';
import { GameRepository } from './game.repository';

@Injectable()
export class GameService {
    constructor(private gameRepository: GameRepository) {}

    publish(project) {
        return this.gameRepository.create(project);
    }

    search(projectName, userId) {
        return this.gameRepository.findByUserId(userId);
    }
}
