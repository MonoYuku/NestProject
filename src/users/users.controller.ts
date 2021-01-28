import { Controller, Get, Post, Render, Body} from '@nestjs/common';
import { UsersService } from './users.service';


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
  createuser(@Body() body){
    console.log(body);
    }
}
