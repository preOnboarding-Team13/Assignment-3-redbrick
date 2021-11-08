import { Prop, Schema } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type BlockSchema = Block & mongoose.Document;

@Schema()
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
