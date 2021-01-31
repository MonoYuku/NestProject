import { Controller, Get, Render, Query, ParseIntPipe, Post, Redirect, Body, Param, Req} from '@nestjs/common';
import { UserListModule } from './user-list.module';
import {UserListService} from './user-list.service'
import {Pagination} from 'nestjs-typeorm-paginate'
import {users} from 'src/users/users.entity'

declare var require: any

@Controller('userlist')
export class UserListController {
  constructor(private readonly userListService: UserListService){}
    @Get()
    @Render('user-list')
   
    async root() {
        const users=await this.userListService.findAll();
          
          return { users};
      }
    @Post()
    @Redirect('/userlist')
    delete(@Req() req){
  
      const users = this.userListService.remove1(req.id);
    }

  
}
