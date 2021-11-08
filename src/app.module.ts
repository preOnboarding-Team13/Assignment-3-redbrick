import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SocketModule } from "./domain/socket/socket.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env"]
		}),
		MongooseModule.forRoot(process.env.MONGO_URI),
		SocketModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
