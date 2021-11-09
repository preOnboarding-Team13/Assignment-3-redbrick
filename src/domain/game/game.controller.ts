import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
    constructor(private gameService: GameService) {}
    @Post()
    publish(@Body() project) {
        return this.gameService.publish(project);
    }

    @Get("/search")
    search(@Query() query) {
        return this.gameService.search(query);
    }
}