import { Test, TestingModule } from '@nestjs/testing';
import { MikulasService } from './mikulas.service';

describe('MikulasService', () => {
  let service: MikulasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MikulasService],
    }).compile();

    service = module.get<MikulasService>(MikulasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
