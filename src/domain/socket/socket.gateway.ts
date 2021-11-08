import {
	MessageBody,
	SubscribeMessage,
	WebSocketGateway
} from "@nestjs/websockets";
import { Socket } from "socket.io";

@WebSocketGateway({ namespace: "makeProject" })
export class SocketGateway {
	@SubscribeMessage("team13")
	handleMessage(@MessageBody() data): string {
		return data;
	}

	handleDisconnect(client: Socket) {
		console.log(`Client disconnected: ${client.id}`);
	}

	handleConnection(client: Socket) {
		console.log(`Client Connected: ${client.id}`);
	}
}
