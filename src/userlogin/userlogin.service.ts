import { Body, Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository, InsertEvent} from 'typeorm';
import { users } from 'src/users/users.entity';

@Injectable()
export class UserloginService {
    constructor(
        @InjectRepository(users)
        private usersRepository: Repository<users>,
      ) {}
      findOne(Login: string): Promise<users> {
        return this.usersRepository.findOne({Login});
      }
      // logging(@Req() req{
   
      //      }
}
