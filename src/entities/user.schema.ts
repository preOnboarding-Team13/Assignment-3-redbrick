import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Project } from "./project.schema";

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
	@Prop({ type: String, required: true, unique: true })
	userId: string;

	@Prop({ type: String, required: true })
	userPw: string;

	@Prop({ type: Date, required: true })
	userBirthday: Date;

	@Prop({ type: Boolean, required: true })
	agreement: boolean;

	@Prop({
		type: [mongoose.Schema.Types.ObjectId],
		ref: Project.name,
		required: true
	})
	project: Project[];

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
