import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/user/user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';

describe('UsersService', () => {
    let service: UserService;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [UserService, 
            {
                provide:getRepositoryToken(UserEntity),
                useValue:{
                    create:jest.fn(),
                    save:jest.fn(),
                    findOne:jest.fn(),
                }
            }],
        }).compile();
        service = moduleFixture.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
