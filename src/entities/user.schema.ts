import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Project, ProjectSchema } from "./project.schema";

export type UserDocument = User & mongoose.Document;

@Schema({ versionKey: false })
export class User {
	@Prop({ type: String, required: true, unique: true })
	userId: string;

	@Prop({ type: String, required: true })
	userPw: string;

	@Prop({ type: String, required: true })
	userBirthday: string;

	@Prop({ type: Boolean, required: true, default: false })
	agreement: boolean;

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
