import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository, InsertEvent} from 'typeorm';
import { users } from './users.entity';
import * as bcrypt from 'bcrypt';
import { Observable } from 'rxjs';

interface userDTO{
  FirstName: string;
  LastName: string;  
  DateOfBirth: Date;  
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

  // hashpassword(Pass: string): Observable <string> {
  //   return from<string>(bcrypt.hash(Pass, 12));
  // }
  
  createuser(data: userDTO) {
      return this.usersRepository.save(data);
  }
}
