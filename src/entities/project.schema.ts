import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Scene } from "./scene.schema";
import { v4 as uuidv4 } from "uuid";

export type ProjectDocument = Project & mongoose.Document;

@Schema({ versionKey: false })
export class Project {
	@Prop({
		type: String,
		required: true,
		default: function genUUID() {
			return uuidv4();
		}
	})
	projectId: string;

	@Prop({ type: String, required: true })
	projectName: string;

	@Prop({
		type: Array,
		ref: Scene.name,
		required: true
	})
	scenes: Scene[];

	@Prop({ type: Boolean, required: true, default: false })
	isPublished: boolean;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "Game"
	})
	gameId: string;

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
