import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type GameDocument = Game & mongoose.Document;

@Schema({ versionKey: false })
export class Game {
	@Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
	gameId: Game;

	@Prop({ type: Boolean, required: true, default: false })
	projectType: boolean;

	@Prop({ type: Number, required: true, default: 0 })
	view: number;

	@Prop({ type: Object, required: true })
	like: object;

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const GameSchema = SchemaFactory.createForClass(Game);