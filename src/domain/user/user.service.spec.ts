import { Test, TestingModule } from "@nestjs/testing";
import { Model } from "mongoose";
import { getModelToken } from "@nestjs/mongoose";
import { User } from "src/entities/user.schema";
import { AuthService } from "../auth/auth.service";
import { UserService } from "./user.service";
import { Project } from "src/entities/project.schema";
import { DuplicatedUserException } from "./exception/DuplicatedUserException";

const token = "this is token";

type MockModel<T = any> = Partial<Record<keyof Model<T>, jest.Mock>>;

const mockModel = {
	findOne: jest.fn(),
	create: jest.fn()
};

const mockAuthService = {
	makeToken: jest.fn(() => {
		return token;
	})
};

describe("UserService", () => {
	let service: UserService;
	let model: MockModel<User>;
	let proModel: MockModel<Project>;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserService,
				{ provide: AuthService, useValue: mockAuthService },
				{ provide: getModelToken(User.name), useValue: mockModel },
				{ provide: getModelToken(Project.name), useValue: mockModel }
			]
		}).compile();

		service = module.get<UserService>(UserService);
		model = module.get<MockModel<User>>(getModelToken(User.name));
		proModel = module.get<MockModel<Project>>(getModelToken(Project.name));
	});

	const dto = new User();
	dto.userId = "user1";
	dto.userPw = "pw1";
	dto.userBirthday = "2021-11-09";
	dto.agreement = true;

	it("should return token", async () => {
		model.findOne.mockReturnValue(null);

		model.create.mockReturnValue(dto);

		const response = await service.create(dto);
		expect(response).toBe(token);
	});

	it("should return error", async () => {
		await model.findOne.mockReturnValue(dto);
		await service.create(dto).catch((error) => {
			expect(error).toBeInstanceOf(DuplicatedUserException);
		});
	});
});
