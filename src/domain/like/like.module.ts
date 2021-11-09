import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Game, GameSchema } from "src/entities/game.schema";
import { Project, ProjectSchema } from "src/entities/project.schema";
import { User, UserSchema } from "src/entities/user.schema";
import { AuthModule } from "../auth/auth.module";
import { LikeController } from "./like.controller";
import { LikeService } from "./like.service";

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Project.name, schema: ProjectSchema },
			{ name: Game.name, schema: GameSchema },
			{ name: User.name, schema: UserSchema }
		]),
		AuthModule
	],
	controllers: [LikeController],
	providers: [LikeService]
})
export class LikeModule {}
