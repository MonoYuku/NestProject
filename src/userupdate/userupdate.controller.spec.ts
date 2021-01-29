import { Test, TestingModule } from '@nestjs/testing';
import { UserupdateController } from './userupdate.controller';

describe('UserupdateController', () => {
  let controller: UserupdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserupdateController],
    }).compile();

    controller = module.get<UserupdateController>(UserupdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
