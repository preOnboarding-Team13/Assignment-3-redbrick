import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SocketModule } from "./domain/socket/socket.module";
import { Block, BlockSchema } from "./entities/block.schema";
import { Game, GameSchema } from "./entities/game.schema";
import { Project, ProjectSchema } from "./entities/project.schema";
import { Scene, SceneSchema } from "./entities/scene.schema";
import { Sprite, SpriteSchema } from "./entities/sprite.schema";
import { User, UserSchema } from "./entities/user.schema";

@Module({
	imports: [
		MongooseModule.forRoot(
			"mongodb:mongodb+srv://team13:0000@cluster0.tejes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
		),
		MongooseModule.forFeature([
			{ name: Block.name, schema: BlockSchema },
			{ name: Game.name, schema: GameSchema },
			{ name: Project.name, schema: ProjectSchema },
			{ name: Scene.name, schema: SceneSchema },
			{ name: Sprite.name, schema: SpriteSchema },
			{ name: User.name, schema: UserSchema }
		]),
		ConfigModule.forRoot({
			envFilePath: [".env"]
		}),
		SocketModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
