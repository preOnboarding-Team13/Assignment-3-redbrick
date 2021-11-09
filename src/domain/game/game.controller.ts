import {
	Controller,
	Get,
	Param,
	Post,
	Query,
	UseGuards,
	Request,
	Patch,
	Body
} from "@nestjs/common";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { CreateGameDto } from "./dto/createGame.dto";
import { GameService } from "./game.service";

@Controller("games")
export class GameController {
	constructor(private gameService: GameService) {}
	@UseGuards(JwtGuard)
	@Post()
	publish(@Request() req, @Body() createGameDto: CreateGameDto) {
		const loginUser = req.user;
		return this.gameService.publish(loginUser, createGameDto);
	}

	@Get("/search")
	search(@Query() query) {
		return this.gameService.search(query);
	}
}
