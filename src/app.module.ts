import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env"]
		}),
		DatabaseModule
	],
  	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
