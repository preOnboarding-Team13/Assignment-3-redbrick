import { InjectModel } from "@nestjs/mongoose";
import {
	MessageBody,
	SubscribeMessage,
	WebSocketGateway
} from "@nestjs/websockets";
import { Model } from "mongoose";
import { Socket } from "socket.io";
import { Block, BlockDocument } from "src/entities/block.schema";

@WebSocketGateway({ namespace: "makeProject" })
export class SocketGateway {

	constructor(@InjectModel(Block.name) private block: Model<BlockDocument>){}

	@SubscribeMessage("team13")
	handleMessage(@MessageBody() data) {
		const createdCat = new this.block(data);
		// this.catModel.find().exec();
		return createdCat.save();
	}

	handleDisconnect(client: Socket) {
		console.log(`Client disconnected: ${client.id}`);
	}

	handleConnection(client: Socket) {
		console.log(`Client Connected: ${client.id}`);
	}
}
