import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type BlockDocument = Block & mongoose.Document;

@Schema({ versionKey: false })
export class Block {
	@Prop({ type: Number, required: true })
	blockId: number;

	@Prop({ type: String, required: true })
	blockCode: string;

	@Prop({ type: Number || String })
	value: number | string;

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const BlockSchema = SchemaFactory.createForClass(Block);
