import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Project, ProjectSchema } from "src/entities/project.schema";
import { SocketGateway } from "./socket.gateway";

@Module({
	imports:[
		MongooseModule.forFeature([{
			name: Project.name,
			schema: ProjectSchema
		}])
	],
	providers: [SocketGateway]
})
export class SocketModule {}
