import { Test, TestingModule } from '@nestjs/testing';
import { UserupdateService } from './userupdate.service';

describe('UserupdateService', () => {
  let service: UserupdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserupdateService],
    }).compile();

    service = module.get<UserupdateService>(UserupdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
