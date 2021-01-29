import { Controller, Get, Post, Render, Body, Res, Redirect} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';




@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get()
    @Render('users')
    async root() {
      const users=await this.usersService.findAll();
        return { };
  }
  
  @Post() 
  @Redirect('/users')
  create(@Body() body){
    this.usersService.createuser(body);
  

    }
  
}