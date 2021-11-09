import { IsString } from "class-validator";

export class CreateGameDto {
	@IsString()
	projectId!: string;

	@IsString()
	gameName!: string;
}
