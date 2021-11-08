import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Sprite, SpriteSchema } from "./sprite.schema";

export type SceneDocument = Scene & mongoose.Document;

@Schema({ versionKey: false })
export class Scene {
	@Prop({ type: Number, required: true })
	sceneId: number;

	@Prop({ type: String, required: true })
	sceneName: string;

	@Prop({
		type: [SpriteSchema],
		required: true,
		default: []
	})
	sprites: Array<Sprite>;
	

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const SceneSchema = SchemaFactory.createForClass(Scene);
