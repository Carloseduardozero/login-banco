import { Test, TestingModule } from '@nestjs/testing';
import { UserListaService } from '../user-lista.service';

describe('UserListaService', () => {
  let service: UserListaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserListaService],
    }).compile();

    service = module.get<UserListaService>(UserListaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
