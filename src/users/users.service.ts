import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './users.entity';

interface userDTO{
  FirstName: string;
  LastName: string;  
  DateOfBirth: string;  
  Login: string;
  Pass: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(users)
    private usersRepository: Repository<users>,
  ) {}

  findAll(): Promise<users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<users> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  createuser(data: userDTO) {
      return this.usersRepository.save(data);
  }
}
