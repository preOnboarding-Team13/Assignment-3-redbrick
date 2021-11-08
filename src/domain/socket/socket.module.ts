import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Block, BlockSchema } from "src/entities/block.schema";
import { SocketGateway } from "./socket.gateway";

@Module({
	imports:[
		MongooseModule.forFeature([{
			name: Block.name,
			schema: BlockSchema
		}])
	],
	providers: [SocketGateway]
})
export class SocketModule {}
