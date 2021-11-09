import {
	Controller,
	Get,
	Param,
	Post,
	Query,
	UseGuards,
	Request
} from "@nestjs/common";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { GameService } from "./game.service";

@Controller("games")
export class GameController {
	constructor(private gameService: GameService) {}
	@UseGuards(JwtGuard)
	@Post()
	publish(@Request() req, @Param() projectId: string) {
		const loginUser = req.user;
		return this.gameService.publish(loginUser, projectId);
	}

	@Get("/search")
	search(@Query() query) {
		return this.gameService.search(query);
	}
}
