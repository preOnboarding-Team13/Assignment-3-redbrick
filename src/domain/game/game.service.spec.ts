import { Test, TestingModule } from '@nestjs/testing';
import { Game } from 'src/entities/game.schema';
import { GameRepository } from './game.repository';
import { GameService } from './game.service';

const mockRepository = {
  findByUserId: jest.fn(),
  findByGameName: jest.fn(),
  findByUserIdAndGameName: jest.fn()
}
describe('GameService', () => {
  let service: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [  
        GameService,
        {
          provide: GameRepository,
          useValue: mockRepository
        }
      ],

    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // 아이디 검색 => 다른 아이디를 가진 게임 두개 생성 후 테스트? 둘중 하나만 나와야하니까
  // 게임 제목 검색 => 동일
  // 둘다 검색
  it('should return', async () => {
      const query = {
        userId: "test123",
        gameName: "재밌는 게임"
      }
      const result = await service.search(query);
      expect(mockRepository.findByUserIdAndGameName).toHaveBeenCalled();
  })
});
