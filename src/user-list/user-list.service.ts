import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from 'src/users/users.entity';
import {
    paginate,
    Pagination,
    IPaginationOptions,
  } from 'nestjs-typeorm-paginate';


@Injectable()
export class UserListService {
    constructor(
        @InjectRepository(users)
        private userRepository: Repository<users>,
      ) {}

      async paginate(options: IPaginationOptions): Promise<Pagination<users>> {
        const queryBuilder = this.userRepository.createQueryBuilder('c');
        queryBuilder.orderBy('c.name', 'DESC'); // Or whatever you need to do
    
        return paginate<users>(queryBuilder, options);
      }
    
      findAll(): Promise<users[]> {
        return this.userRepository.find();
      }
    
      findOne(id: string): Promise<users> {
        return this.userRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
      }
     
}
