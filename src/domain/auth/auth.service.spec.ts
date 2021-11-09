import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";

import { User } from "src/entities/user.schema";
import * as bcrypt from "bcrypt";
import { Model } from "mongoose";
import { JwtService } from "@nestjs/jwt";
import { getModelToken } from "@nestjs/mongoose";
import { UnauthorizedUserException } from "../user/exception/UnauthorizedUserException";

const token = "this is token";
const userPw = "thisIsPW";

type MockModel<T = any> = Partial<Record<keyof Model<T>, jest.Mock>>;

const mockModel = <T = any>(): MockModel<T> => ({
	findOne: jest.fn(async (userId: string) => {
		const hashed = await bcrypt.hash(userPw, 10);
		const user = new User();
		user.userId = userId["userId"];
		user.userPw = hashed;
		user.userBirthday = "2021-12-11";
		user.agreement = true;

		return {
			...user
		};
	})
});

const mockJwtService = {
	makeToken: jest.fn(() => {
		return token;
	})
};
describe("AuthService", () => {
	let service: AuthService;
	let model: MockModel<User>;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthService,
				{ provide: JwtService, useValue: mockJwtService },
				{ provide: getModelToken(User.name), useValue: mockModel() }
			]
		}).compile();

		service = module.get<AuthService>(AuthService);
		model = module.get<MockModel<User>>(getModelToken(User.name));
	});

	it("should return userValidate", async () => {
		const userId = "user1";
		const response = await service.validateUser(userId, userPw);
		expect(response.userId).toEqual(userId);
	});

	it("should return userValidate Error", async () => {
		const userId = "user1";
		await service.validateUser(userId, "errorPw").catch((error) => {
			expect(error).toBeInstanceOf(UnauthorizedUserException);
		});
	});
});
