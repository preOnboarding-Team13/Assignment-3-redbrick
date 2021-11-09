import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Project, ProjectSchema } from "src/entities/project.schema";
import { User, UserSchema } from "src/entities/user.schema";
import { AuthModule } from "../auth/auth.module";
import { UserModule } from "../user/user.module";
import { ProjectController } from "./project.controller";
import { ProjectRepository } from "./project.repository";
import { ProjectService } from "./project.service";

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: User.name, schema: UserSchema },
			{ name: Project.name, schema: ProjectSchema }
		]),
		AuthModule,
		UserModule
	],
	controllers: [ProjectController],
	providers: [ProjectService, ProjectRepository],
	exports: [ProjectRepository]
})
export class ProjectModule {}
