import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { SocketModule } from "./domain/socket/socket.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env"]
		}),
		DatabaseModule,
		SocketModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
