import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from 'src/entities/game.schema';
import { Project, ProjectSchema } from 'src/entities/project.schema';
import { ProjectModule } from '../project/project.module';
import { ProjectRepository } from '../project/project.repository';
import { GameController } from './game.controller';
import { GameRepository } from './game.repository';
import { GameService } from './game.service';

@Module({
	imports: [
			MongooseModule.forFeature([
				{ name: Game.name, schema: GameSchema },
				{ name: Project.name, schema: ProjectSchema }
			]),
			ProjectModule
		],
	controllers: [GameController],
	providers: [GameService, GameRepository]
})
export class GameModule {}
