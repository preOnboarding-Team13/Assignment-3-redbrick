import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Block, BlockSchema } from "./block.schema";

export type SpriteDocument = Sprite & mongoose.Document;

@Schema({ versionKey: false })
export class Sprite {
	// @Prop({ type: Number, required: true })
	// spriteId: number;

	@Prop({ type: String, required: true })
	spriteName: string;

	@Prop({ type: String, required: true })
	spriteCode: string;

	@Prop({
		type: [BlockSchema],
		required: true,
		default: []
	})
	blocks: Array<Block>;

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const SpriteSchema = SchemaFactory.createForClass(Sprite);
