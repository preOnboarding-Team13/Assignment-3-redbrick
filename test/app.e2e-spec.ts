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

let jwtToken = "";
let projectId = "";

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
	describe("Project 관련 테스트", () => {
		let _id;
		const fakeProject = {
			projectName: "테스트 코드"
		};
		const fakeModifiedProject = {
			projectName: "프로젝트 네임"
		};
		it("/projects (Post-생성)", () => {
			return request(app.getHttpServer())
				.post("/projects")
				.set("Authorization", `Bearer ${jwtToken}`)
				.send(fakeProject)
				.expect(201)
				.expect((res) => {
					_id = res.body._id;
					expect(res.body.projectName).toEqual(
						fakeProject.projectName
					);
				});
		});

		it("/projects 비인가 된 유저는 프로젝트를 생성할 수 없다.", () => {
			return request(app.getHttpServer())
				.post("/projects")
				.set("Authorization", `earer ${jwtToken}`)
				.send(fakeProject)
				.expect(401)
				.expect((res) => {
					expect(res.body.message).toEqual("Unauthorized");
				});
		});
		it("/users/projects (성공)", () => {
			return request(app.getHttpServer())
				.get("/users/projects")
				.set("Authorization", `Bearer ${jwtToken}`)
				.expect(200)
				.expect((res) => {
				 	// expect(res.body)
					console.log(res.body);
				});
		});
		it("/users/projects (인증 실패)", () => {
			return request(app.getHttpServer())
				.get("/users/projects")
				.set("Authorization", `Bearer `)
				.expect(401)
				.expect((res) => {
					expect(res.body.message).toEqual("Unauthorized");
				});
		});
		it("/projects 프로젝트를 수정 할 수 있다.", () => {
			return request(app.getHttpServer())
				.patch(`/projects/${_id}`)
				.set("Authorization", `Bearer ${jwtToken}`)
				.send(fakeModifiedProject)
				.expect(200)
				.expect((res) => {
					expect(res.body.projectName).toEqual(
						fakeModifiedProject.projectName
					);
				});
		});

		it("/projects 비인가 된 유저는 프로젝트를 수정할 수 없다.", () => {
			return request(app.getHttpServer())
				.patch(`/projects/${_id}`)
				.set("Authorization", `earer ${jwtToken}`)
				.send(fakeModifiedProject)
				.expect(401)
				.expect((res) => {
					expect(res.body.message).toEqual("Unauthorized");
				});
		});

		it("/projects 프로젝트 조회 (편집하기 위해 조회)", () => {
			return request(app.getHttpServer())
				.get(`/projects/${_id}`)
				.set("Authorization", `Bearer ${jwtToken}`)
				.expect(200)
				.expect((res) => {
					expect(res.body.projectName).toEqual(
						fakeModifiedProject.projectName
					);
				});
		});

		it("/projects  비인가 된 유저는 프로젝트를 조회 할 수 없다.", () => {
			return request(app.getHttpServer())
				.get(`/projects/${_id}`)
				.set("Authorization", `earer ${jwtToken}`)
				.expect(401)
				.expect((res) => {
					expect(res.body.message).toEqual("Unauthorized");
				});
		});

		it("/projects 비인가된 유저는  프로젝트를 삭제 할 수 없다 ", () => {
			return request(app.getHttpServer())
				.delete(`/projects/${_id}`)
				.set("Authorization", `earer ${jwtToken}`)
				.expect(401)
				.expect((res) => {
					expect(res.body.message).toEqual("Unauthorized");
				});
		});

		it("/projects 프로젝트를 삭제 할 수 있다. Status 반환값은 204 이다. ", () => {
			return request(app.getHttpServer())
				.delete(`/projects/${_id}`)
				.set("Authorization", `Bearer ${jwtToken}`)
				.expect(204);
		});
	});
	describe("Game 관련 테스트", () => {
		let _id;
		const fakeGame = {
			gameName: "출시된 게임"
		};
		const fakeModifiedGame = {
			gameName: "재출시된 게임"
		};
		it("/game 테스트를 위한 project 생성", () => {
			return request(app.getHttpServer())
				.post("/projects")
				.set("Authorization", `Bearer ${jwtToken}`)
				.send({ projectName: "가짜 프로젝트" })
				.expect(201)
				.expect((res) => {
					projectId = res.body._id;
				});
		});
		it("/games (최초 출시 성공)", () => {
			const body = {
				projectId,
				gameName: "출시된 게임"
			};
			return request(app.getHttpServer())
				.post("/games")
				.set("Authorization", `Bearer ${jwtToken}`)
				.send(body)
				.expect(201)
				.expect((res) => {
					_id = res.body._id;
					expect(res.body.gameName).toEqual(fakeGame.gameName);
				});
		});
		it("/games (재 출시 성공)", () => {
			const body = {
				projectId,
				gameName: "재출시된 게임"
			};
			return request(app.getHttpServer())
				.post("/games")
				.set("Authorization", `Bearer ${jwtToken}`)
				.send(body)
				.expect(201)
				.expect((res) => {
					expect(res.body.gameName).toEqual(
						fakeModifiedGame.gameName
					);
				});
		});
		it("/games (실패) 존재하지 않는 프로젝트일 때)", () => {
			const body = {
				projectId: "618a557ff66d3bd08128850f", // 가짜 id임
				gameName: "출시된 게임"
			};
			return request(app.getHttpServer())
				.post(`/games`)
				.set("Authorization", `Bearer ${jwtToken}`)
				.send(body)
				.expect(404)
				.expect((res) => {
					expect(res.body.message).toEqual(error.NOT_FOUND_PROJECT);
				});
		});
		it("/games (실패) 불완전한 body)", () => {
			const body = {
				projectId
			};
			return request(app.getHttpServer())
				.post("/games")
				.set("Authorization", `Bearer ${jwtToken}`)
				.send(body)
				.expect(400)
				.expect((res) => {
					expect(res.body.message[0]).toContain(error.IS_NOT_STRING);
				});
		});
		it("/games (실패) 인증 실패)", () => {
			const body = {
				projectId,
				gameName: "출시된 게임"
			};
			return request(app.getHttpServer())
				.post("/games")
				.send(body)
				.expect(401)
				.expect((res) => {
					expect(res.body.message).toEqual("Unauthorized");
				});
		});
		it("/games (성공) userId", () => {
			return request(app.getHttpServer())
				.get(`/games?userId=${"test"}`)
				.expect(200)
				.expect((res) => {
					if (res.body.length > 0) {
						for (const g of res.body) {
							expect(g.project.userId).toEqual("test");
						}
					}
				});
		});
		it("/games (성공) gameName", () => {
			return request(app.getHttpServer())
				.get(`/games?gameName=${"게임"}`)
				.expect(200)
				.expect((res) => {
					if (res.body.length > 0) {
						for (const g of res.body) {
							expect(g.project.gameName).toEqual("test");
						}
					}
				});
		});
		it("/games (성공) userId && gameName", () => {
			return request(app.getHttpServer())
				.get(`/games?gameName=${"게임"}&userId=${"test"}`)
				.expect(200)
				.expect((res) => {
					if (res.body.length > 0) {
						for (const g of res.body) {
							expect(g.project.userId).toEqual("test");
							expect(g.project.gameName).toEqual("게임");
						}
					}
				});
		});
	});
});
