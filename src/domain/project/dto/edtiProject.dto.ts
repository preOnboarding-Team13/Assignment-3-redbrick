import { IsString } from "class-validator";

export class EditProjectDto {
	@IsString()
	projectName!: string;
}
