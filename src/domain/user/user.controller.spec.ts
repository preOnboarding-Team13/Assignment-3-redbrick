import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

// const mockService = {
// 	hashPassword: jest.fn(),
// 	create: jest.fn(),
// 	getProject: jest.fn()
// };

// describe("UserController", () => {
// 	let controller: UserController;
//   let service: UserService;

// 	beforeEach(async () => {
// 		const module: TestingModule = await Test.createTestingModule({
// 			controllers: [UserController],
//       providers: [
//         {
//           provide: UserService,
//           useValue: mockService
//         }
//       ]
// 		}).compile();

// 		controller = module.get<UserController>(UserController);
// 		service = module.get<UserService>(UserService);
// 	});

//   describe("user controller Test", () => {
//     const user= {
//       _id:"618a110df4e6ade8b8d66b0e",
//       updateDt:"2021-11-09T06:06:46.104+00:00",
//       createDt:"2021-11-09T06:06:46.104+00:00",
//       agreement:true,
//       userBirthday:"2021-11-09",
//       userPw:"$2b$10$J0IulFahSpqySQaIy6qz5ue67u7m1UCyOkf061ecmULJ9ghZsrOvS",
//       userId:"hello123"
//     }
//     const userId = "heejin22";
//     const userPw = "heejin22";
//     it("user controller Test(성공)", async () => {

//       mockService.signIn.mockResolvedValue()
// 		expect(controller).toBeDefined();
//     });
// });
import { AuthService } from "../auth/auth.service";
import { CreateUserDto } from "./dto/createUser.dto";

const mockUserService = {
	create: jest.fn(() => {
		return "this is token";
	})
};

const mockAuthService = {
	makeToken: jest.fn(() => {
		return "this is token";
	})
};

describe("UserController", () => {
	let controller: UserController;

	beforeEach(async () => {
		const moduleRef: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
			providers: [
				{
					provide: UserService,
					useValue: mockUserService
				},
				{
					provide: AuthService,
					useValue: mockAuthService
				}
			]
		}).compile();

		controller = moduleRef.get<UserController>(UserController);
	});
	describe("Signup Success", () => {
		it("should return properties(Signup Success)", async () => {
			const dto = new CreateUserDto();
			dto.userId = "userId";
			dto.userPw = "password1234";
			dto.userBirthday = "2021-11-09";

			const response = await controller.signUp(dto);

			expect(response).toHaveProperty("data");
			expect(response).toHaveProperty("message");
			expect(response).toHaveProperty("statusCode");
		});
	});
	describe("Signup Success", () => {
		it("should return properties(Login Success)", async () => {
			const form = { userId: "userId", password: "password1234" };
			const response = await controller.signIn(form);

			expect(response).toHaveProperty("data");
			expect(response).toHaveProperty("message");
			expect(response).toHaveProperty("statusCode");
		});
	});
});
