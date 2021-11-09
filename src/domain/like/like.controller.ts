import {
	ClassSerializerInterceptor,
	Controller,
	Get,
	Param,
	Patch,
	Request,
	UseGuards,
	UseInterceptors
} from "@nestjs/common";
import { JwtGuard } from "../auth/guards/jwtGuard.guard";
import { LikeService } from "./like.service";

@UseInterceptors(ClassSerializerInterceptor)
@Controller("")
export class LikeController {
	constructor(private readonly likeService: LikeService) {}

	@Get("/game:gameId")
	async findGame(@Param("gameId") gameId: string) {
		return await this.likeService.findGame(gameId);
	}

	@UseGuards(JwtGuard)
	@Patch("/like/:gameId")
	async likeGame(@Request() req, @Param("gameId") gameId: string) {
		return await this.likeService.likeGame(req.user, gameId);
	}

	@UseGuards(JwtGuard)
	@Patch("/hate/:gameId")
	async hateGame(@Request() req, @Param("gameId") gameId: string) {
		return await this.likeService.hateGame(req.user, gameId);
	}
}
