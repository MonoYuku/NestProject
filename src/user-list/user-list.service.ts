import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from 'src/users/users.entity';
import {getConnection} from "typeorm";



@Injectable()
export class UserListService {
    constructor(
        @InjectRepository(users)
        private userRepository: Repository<users>,
      ) {}
      findAll(): Promise<users[]> {
        return this.userRepository.find();
      }
    
      findOne(id: number): Promise<users> {
        return this.userRepository.findOne(id);
      }
    
    
      async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }

      async remove1(id:number): Promise<void>{
        await this.userRepository.softDelete(id);
      }
     
}
