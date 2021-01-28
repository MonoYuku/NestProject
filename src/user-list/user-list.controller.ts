import { Controller, Get, Render, Query, ParseIntPipe} from '@nestjs/common';
import { UserListModule } from './user-list.module';
import {UserListService} from './user-list.service'
import {Pagination} from 'nestjs-typeorm-paginate'
import {users} from 'src/users/users.entity'



@Controller('userlist')
export class UserListController {
  constructor(private readonly userListService: UserListService){}
    @Get()
    @Render('user-list')
   
    async root() {
        const users=await this.userListService.findAll();
          
          return { users};
      }

  
}
