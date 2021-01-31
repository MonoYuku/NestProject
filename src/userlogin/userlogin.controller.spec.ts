import { Test, TestingModule } from '@nestjs/testing';
import { UserloginController } from './userlogin.controller';

describe('UserloginController', () => {
  let controller: UserloginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserloginController],
    }).compile();

    controller = module.get<UserloginController>(UserloginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
