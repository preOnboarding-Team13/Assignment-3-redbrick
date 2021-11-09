import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Project, ProjectSchema } from "./project.schema";

export type GameDocument = Game & mongoose.Document;

@Schema({ versionKey: false })
export class Game {
	@Prop({ type: ProjectSchema, required: true })
	project: Project;

	@Prop({ type: String, required: true })
	projectName: string;

	@Prop({ type: String, required: true })
	description: string;

	@Prop({ type: Number, required: true, default: 0 })
	view: number;

	@Prop({ type: Object, required: true, default: {} })
	like: object;

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const GameSchema = SchemaFactory.createForClass(Game);
function uuidv4() {
	throw new Error("Function not implemented.");
}

