import { Prop, Schema } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Project } from "./project.schema";

export type UserSchema = User & mongoose.Document;

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

	@Prop({ type: [Project], required: true })
	project: [Project];

	@Prop({ type: Date, required: true, default: Date.now() })
	createDt: Date;

	@Prop({ type: Date, required: true, default: Date.now() })
	updateDt: Date;
}
