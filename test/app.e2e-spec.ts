import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

const error = {
	IS_NOT_STRING: "must be a string",
	IS_NOT_BOOL: "must be a boolean",
	IS_NOT_NUMBER: "must be an integer number",
	IS_EMPTY: "should not be empty",
	UNAUTHORIZED: "인증되지 않은 사용자입니다.",
	BADREQUEST: "잘못된 접근입니다.",
	NOT_FOUND: "요청받은 리소스를 찾을 수 없습니다.",
	NOT_FOUND_GAME: "해당 게임을 찾을 수 없습니다.",
	NOT_FOUND_USER: "해당 사용자를 찾을 수 없습니다.",
	NOT_FOUND_PROJECT: "해당 프로젝트를 찾을 수 없습니다.",
	UNAUTHORIZED_USER: "아이디나 비밀번호를 확인해주세요.",
	DUPLICATED_USER: "중복된 아이디입니다."
};

let jwtToken= "";
describe("AppController (e2e)", () => {
	let app: INestApplication;
	
	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();

		app = moduleFixture.createNestApplication();
		app.useGlobalPipes(
			new ValidationPipe({
				whitelist: true,
				forbidNonWhitelisted: true,
				transform: true
			})
		);
		await app.init();
	});

	describe("User 관련 테스트", () => {
		it("/users/signup (성공)", () => {
			const user = {
				userId: "test",
				userPw: "test",
				userBirthday: "1998-07-01",
				agreement: true
			};
			return request(app.getHttpServer())
				.post("/users/signup")
				.send(user)
				.expect(201);
		});
		it("/users/signup (중복된 User)", () => {
			const user = {
				userId: "test",
				userPw: "test",
				userBirthday: "1998-07-01",
				agreement: true
			};
			return request(app.getHttpServer())
				.post("/users/signup")
				.send(user)
				.expect(409)
				.expect((res) => {
					expect(res.body.message).toEqual(error.DUPLICATED_USER);
				});
		});
		it("/users/signup (불충분한 body)", () => {
			const user = {
				userId: "test",
				userPw: "test"
			};
			return request(app.getHttpServer())
				.post("/users/signup")
				.send(user)
				.expect(400)
				.expect((res) => {
					const messages = res.body.message;
					expect(messages[0]).toContain(error.IS_EMPTY);
					expect(messages[1]).toContain(error.IS_NOT_STRING);
					expect(messages[2]).toContain(error.IS_NOT_BOOL);
				});
		});
		it("/users/signin (성공)", () => {
			const user = {
				userId: "test",
				userPw: "test"
			};
			return request(app.getHttpServer())
				.post("/users/signin")
				.send(user)
				.expect(201)
				.expect((res) => {
					jwtToken = res.body.data;
					expect(jwtToken).toMatch(
						/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
					); // jwt regex;
				});
		});
		it("/users/signin (잘못된 정보)", () => {
			const user = {
				userId: "test",
				userPw: "wrongpw"
			};
			return request(app.getHttpServer())
				.post("/users/signin")
				.send(user)
				.expect(404)
				.expect((res) => {
					expect(res.body.message).toEqual(error.UNAUTHORIZED_USER);
				});
		});
	});
});
