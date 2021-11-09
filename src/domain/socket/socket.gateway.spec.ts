import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { Model } from "mongoose";
import { Project } from "src/entities/project.schema";
import { SocketGateway } from "./socket.gateway";

const mockProjectModel = {
	findOneAndUpdate: jest.fn()
};

type MockModel<T = any> = Partial<Record<keyof Model<T>, jest.Mock>>;

describe("SocketGateway", () => {
	let gateway: SocketGateway;
	let projectDocModel: MockModel<Project>;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				SocketGateway,
				{
					provide: getModelToken("Project"),
					useValue: mockProjectModel
				}
			]
		}).compile();

		gateway = module.get<SocketGateway>(SocketGateway);
		projectDocModel = module.get<MockModel<Project>>(
			getModelToken("Project")
		);
	});

	const data = {
		projectName: "블락은 되나요?",
		scenes: [
			{
				sceneId: 1,
				sceneName: "name!",
				sprites: [
					{
						spriteId: 1,
						spriteName: "gd",
						spriteCode: "!!",
						blocks: [
							{
								blockId: 123,
								blockCode: "tes"
							}
						]
					}
				]
			}
		],
		isPublished: true
	};

	const updateData = {
		_id: "618a881793a51f0b46d35565",
		updateDt: "2021-11-09T14:44:25.544Z",
		createDt: "2021-11-09T14:39:10.749Z",
		isPublished: true,
		projectName: "블락은 되나요?",
		userId: "bada",
		scenes: [
			{
				updateDt: "2021-11-09T15:27:28.054Z",
				createDt: "2021-11-09T15:27:28.054Z",
				sprites: [
					{
						updateDt: "2021-11-09T15:27:28.051Z",
						createDt: "2021-11-09T15:27:28.051Z",
						blocks: [
							{
								updateDt: "2021-11-09T15:27:28.047Z",
								createDt: "2021-11-09T15:27:28.047Z",
								blockCode: "tes",
								_id: "618a93ec270802b1d0340517"
							}
						],
						spriteCode: "!!",
						spriteName: "gd",
						_id: "618a93ec270802b1d0340516"
					}
				],
				sceneName: "name!",
				_id: "618a93ec270802b1d0340515"
			}
		]
	};

	describe("SocketGateway SubscribeMessage(update)  테스트", () => {
		it("like Service findGame 테스트 (NotFoundGameException)", async () => {
			// given
			mockProjectModel.findOneAndUpdate.mockResolvedValue(updateData);
			projectDocModel.findOneAndUpdate.mockImplementationOnce(() => ({
				exec: jest.fn().mockReturnValue(updateData)
			}));
			// when
			const result = await gateway.handleMessage(data);

			// then
			expect(result).toEqual(updateData);
		});
	});
});
