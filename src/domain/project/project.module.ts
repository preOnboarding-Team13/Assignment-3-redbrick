import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Project, ProjectSchema } from "src/entities/project.schema";
import { User, UserSchema } from "src/entities/user.schema";
import { AuthModule } from "../auth/auth.module";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: User.name, schema: UserSchema },
			{ name: Project.name, schema: ProjectSchema }
		]),
		AuthModule
	],
	controllers: [ProjectController],
	providers: [ProjectService]
})
export class ProjectModule {}
