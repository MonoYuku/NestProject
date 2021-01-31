import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from 'src/users/users.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

interface userDTO{
    id: number;
    FirstName: string;
    LastName: string;  
    DateOfBirth: Date;  
    Login: string;
    Pass: string;
    idRoli: number;
    isDeleted: Boolean;
  }

@Injectable()
export class UserupdateService {
    constructor(
        @InjectRepository(users)
        private userRepository: Repository<users>,
      ) {}
      // async updateUser(user: userDTO,data: QueryDeepPartialEntity<users> ): Promise<users> {
      //   return this.userRepository.update(user, data);
      // }
      
      createuser(data: userDTO) {
        return this.userRepository.save(data);
}
}
