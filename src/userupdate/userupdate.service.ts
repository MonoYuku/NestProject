import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from 'src/users/users.entity';

interface userDTO{
    id: number;
    FirstName: string;
    LastName: string;  
    DateOfBirth: Date;  
  }

@Injectable()
export class UserupdateService {
    constructor(
        @InjectRepository(users)
        private userRepository: Repository<users>,
      ) {}
      updateUser(user: users,data){
        return this.userRepository.update(user, data);
      }
      createuser(data: userDTO) {
        return this.userRepository.save(data);
}
}
