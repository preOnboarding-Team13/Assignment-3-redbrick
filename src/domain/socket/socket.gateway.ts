import { InjectModel } from "@nestjs/mongoose";
import {
	MessageBody,
	SubscribeMessage,
	WebSocketGateway
} from "@nestjs/websockets";
import { Model } from "mongoose";
import { Socket } from "socket.io";
import { Project, ProjectDocument } from "src/entities/project.schema";

@WebSocketGateway({ namespace: "project" })
export class SocketGateway {
	constructor(
		@InjectModel(Project.name) private project: Model<ProjectDocument>
	) {}

	@SubscribeMessage("update")
	handleMessage(@MessageBody() data) {
		return this.project
			.findOneAndUpdate({ projectId: data.projectId }, data, {
				returnOriginal: false
			})
			.exec();
	}

	handleDisconnect(client: Socket) {
		console.log(`Client disconnected: ${client.id}`);
	}

	handleConnection(client: Socket) {
		console.log(`Client Connected: ${client.id}`);
	}
}
