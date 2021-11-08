import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Game } from "./game.schema";
import { Scene } from "./scene.schema";

export type ProjectDocument = Project & mongoose.Document;

@Schema({ versionKey: false })
export class Project {
	@Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
	projectId: Project;

	@Prop({ type: String, required: true })
	projectName: string;

	@Prop({ type: [Scene], required: true })
	scenes: [Scene];

	@Prop({ type: Boolean, required: true, default: false })
	isPublished: boolean;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Game"
	})
	gameId: [Game];

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);