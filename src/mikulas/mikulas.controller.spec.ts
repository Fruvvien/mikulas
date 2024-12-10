import { Test, TestingModule } from '@nestjs/testing';
import { MikulasController } from './mikulas.controller';
import { MikulasService } from './mikulas.service';

describe('MikulasController', () => {
  let controller: MikulasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MikulasController],
      providers: [MikulasService],
    }).compile();

    controller = module.get<MikulasController>(MikulasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
