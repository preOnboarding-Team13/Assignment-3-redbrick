import { Injectable } from '@nestjs/common';
import { SearchQuery } from './dto/searchQuery.dto';
import { GameRepository } from './game.repository';

@Injectable()
export class GameService {
    constructor(private gameRepository: GameRepository) {}

    publish(project) {
        return this.gameRepository.create(project);
    }

    search(query: SearchQuery) {
        const { userId, gameName } = query;
        if(userId && gameName) {
            return this.gameRepository.findByUserIdAndGameName(query)
        }
        
        return userId ?
            this.gameRepository.findByUserId(userId) :
            this.gameRepository.findByGameName(gameName)
    }
}
