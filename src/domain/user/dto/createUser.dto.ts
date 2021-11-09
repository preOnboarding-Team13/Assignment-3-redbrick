import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	userId!: string;

	@IsString()
	@IsNotEmpty()
	userPw!: string;

	@IsString()
	@IsNotEmpty()
	userBirthday!: string;

	@IsBoolean()
	agreement!: boolean;
}
