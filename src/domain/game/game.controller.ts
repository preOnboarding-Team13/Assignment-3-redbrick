import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
// import { Query } from 'mongoose';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
    constructor(private gameService: GameService) {}
    @Post()
    publish(@Body() project) {
        console.log(project, "HIHIHIHI");
        return this.gameService.publish(project);
    }

    @Get("search")
    search(@Query("projectName") projectName, @Query("userId") userId) {
        return this.gameService.search(projectName, userId);
    }
}