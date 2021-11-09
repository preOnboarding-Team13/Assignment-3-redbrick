import { Test, TestingModule } from "@nestjs/testing";
import { GameController } from "./game.controller";
import { GameService } from "./game.service";

const mockService = {
	publish: jest.fn(),
	search: jest.fn()
};

describe("GameController", () => {
	let controller: GameController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [GameController],
			providers: [
				{
					provide: GameService,
					useValue: mockService
				}
			]
		}).compile();

		controller = module.get<GameController>(GameController);
	});

	describe("game controller publish 테스트", () => {
		it("game controller publish 테스트 (성공)", async () => {
			//given
			
			// when

			// then
			expect(controller).toBeDefined();
		});
	});
	
});
